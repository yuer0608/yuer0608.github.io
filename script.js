document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("year-select");
  const scoreLineInfo = document.getElementById("score-line-info");
  const filtersContainer = document.getElementById("filters-container");
  const tableHead = document.querySelector("#data-table thead");
  const tableBody = document.querySelector("#data-table tbody");

  let allData = [];
  let columnOrder = [];
  let activeFilters = {};

  const scoreLines = {
    2024: { 物理类: 422, 历史类: 438 },
    2023: { 物理类: 415, 历史类: 428 },
    2022: { 物理类: 414, 历史类: 451 },
    2021: { 物理类: 434, 历史类: 466 },
  };

  function updateScoreLineInfo(year) {
    const scores = scoreLines[year];
    if (scores) {
      scoreLineInfo.innerHTML = `
        <span>本科物理类分数线: <strong>${scores["物理类"]}</strong></span>
        <span>本科历史类分数线: <strong>${scores["历史类"]}</strong></span>
      `;
    } else {
      scoreLineInfo.innerHTML = "";
    }
  }

  async function loadData(year) {
    try {
      const response = await fetch(`./data/${year}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      allData = data.data;
      columnOrder = data.columns;
      generateFilters();
      renderTable();
    } catch (error) {
      console.error("Could not load data for year:", year, error);
      tableHead.innerHTML = "";
      tableBody.innerHTML =
        '<tr><td colspan="100%">无法加载数据，请检查文件是否存在或格式是否正确。</td></tr>';
    }
  }

  function renderTable() {
    // Clear existing table
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    // Render header
    const headerRow = document.createElement("tr");
    columnOrder.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);

    // Filter data
    const filteredData = allData.filter((row) => {
      for (const key in activeFilters) {
        const filterValue = activeFilters[key];

        if (key === "投档线") {
          const score = parseFloat(row[key]);
          if (
            (filterValue.min && score < filterValue.min) ||
            (filterValue.max && score > filterValue.max)
          ) {
            return false;
          }
        } else {
          if (filterValue && row[key] != filterValue) {
            return false;
          }
        }
      }
      return true;
    });

    // Render rows
    filteredData.forEach((row) => {
      const tr = document.createElement("tr");
      columnOrder.forEach((col) => {
        const td = document.createElement("td");
        td.textContent =
          row[col] !== null && row[col] !== undefined ? row[col] : "";
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  }

  function generateFilters() {
    filtersContainer.innerHTML = "";
    activeFilters = {};

    columnOrder.forEach((col) => {
      const filterGroup = document.createElement("div");
      filterGroup.classList.add("filter-group");

      const label = document.createElement("label");
      label.textContent = col;
      filterGroup.appendChild(label);

      if (col === "投档线") {
        const minInput = document.createElement("input");
        minInput.type = "number";
        minInput.placeholder = "最低分";
        minInput.dataset.column = col;
        minInput.dataset.type = "min";

        const maxInput = document.createElement("input");
        maxInput.type = "number";
        maxInput.placeholder = "最高分";
        maxInput.dataset.column = col;
        maxInput.dataset.type = "max";

        minInput.addEventListener("input", handleFilterChange);
        maxInput.addEventListener("input", handleFilterChange);

        filterGroup.appendChild(minInput);
        filterGroup.appendChild(maxInput);
      } else {
        const select = document.createElement("select");
        select.dataset.column = col;
        const uniqueValues = [
          ...new Set(allData.map((item) => item[col])),
        ].sort();

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = `全部`;
        select.appendChild(defaultOption);

        uniqueValues.forEach((val) => {
          if (val !== null && val !== undefined) {
            const option = document.createElement("option");
            option.value = val;
            option.textContent = val;
            select.appendChild(option);
          }
        });
        select.addEventListener("change", handleFilterChange);
        filterGroup.appendChild(select);
      }
      filtersContainer.appendChild(filterGroup);
    });
  }

  function handleFilterChange(event) {
    const element = event.target;
    const column = element.dataset.column;

    if (column === "投档线") {
      const type = element.dataset.type;
      if (!activeFilters[column]) {
        activeFilters[column] = { min: null, max: null };
      }
      activeFilters[column][type] = element.value
        ? parseFloat(element.value)
        : null;
    } else {
      activeFilters[column] = element.value;
    }

    renderTable();
  }

  yearSelect.addEventListener("change", (e) => {
    const selectedYear = e.target.value;
    loadData(selectedYear);
    updateScoreLineInfo(selectedYear);
  });

  // Initial load
  const initialYear = yearSelect.value;
  loadData(initialYear);
  updateScoreLineInfo(initialYear);
});

const viewButtons = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const topTabs = document.querySelectorAll(".top-tab");
const sideTrips = document.querySelectorAll(".side-trip");

function activateView(viewName) {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  });

  topTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.viewTarget === viewName);
  });

  sideTrips.forEach((trip) => {
    trip.classList.toggle("is-active", viewName === "list");
  });
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateView(button.dataset.viewTarget);
  });
});

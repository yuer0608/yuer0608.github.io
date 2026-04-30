const trips = [
  {
    id: "hangzhou-family-trip",
    title: "杭州五一亲子 2 天 1 夜行程",
    subtitle: "运河烟火、水乡慢游、幻想岛放电、龙坞茶山拍照",
    period: "5月3日-5月4日",
    location: "上海自驾杭州",
    people: "一家三口",
    hotel: "杭州运河湖州街亚朵酒店",
    summary: "第一天沿运河慢慢走，保证孩子午饭和午休；第二天上午去湘湖开元森泊幻想岛，下午转场龙坞茶山，晚上无痛返程。",
    facts: [
      ["天数", "2天1夜"],
      ["出行", "上海自驾杭州"],
      ["成员", "一家三口"],
      ["预算", "约 1,760-1,840 元"]
    ],
    actions: [
      { title: "酒店已定", items: ["杭州运河湖州街亚朵酒店", "住宿预算：400 元", "到店前电话确认房间", "备注优先打扫大床房"] },
      { title: "抢订门票", items: ["5月4日湘湖开元森泊·幻想岛", "只买幻想岛无动力乐园票", "不用买通票", "不用买水乐园票"] },
      { title: "找防滑袜", items: ["儿童防滑袜", "成人防滑袜", "室内攀爬网强制要求", "自己带能省大几十块钱"] },
      { title: "前台话术", items: ["带5岁女儿", "5月3日下午1点多急需午休", "请无论如何帮我备注", "优先打扫一间大床房"] }
    ],
    prep: [
      { title: "Day 1 微雨/多云", items: ["14-24℃", "漂亮小裙子", "薄荷色/浅色针织开衫", "透明长柄伞"] },
      { title: "Day 2 多云转晴", items: ["14-26℃", "吸汗短袖/薄长袖", "宽松防蚊长裤", "运动鞋"] },
      { title: "森泊必带", items: ["儿童防滑袜", "成人防滑袜", "替换干爽衣服", "水杯和汗巾"] },
      { title: "返程备用", items: ["纯棉睡衣", "放车上晚上备用", "小毯子/靠枕", "湿巾、垃圾袋"] }
    ],
    days: [
      {
        title: "Day 1：5月3日",
        summary: "小河直街 → 酒店午休 → 拱宸桥码头 → 胜利河。主打不累，核心是按时午饭和酒店午休。",
        events: [
          { time: "08:30-10:30", title: "出发，直奔小河直街", text: "从上海开到杭州小河直街历史文化街区停车场。小河直街在京杭大运河、小河、余杭塘河交汇处，保留杭州近代水乡民居和运河码头生活气息。推着露营车或推车，带孩子在青石板路上找猫咪，吃定胜糕、买糖葫芦。" },
          { time: "12:00-13:00", title: "准时吃午饭", text: "孩子饿得快，12点准时在街区找个饭馆坐下吃面或小炒，千万别拖到1点。" },
          { time: "13:20-15:00", title: "回血时刻：酒店午休", text: "到酒店，拉窗帘，全家在大床上踏踏实实睡一个半小时。" },
          { time: "15:30-17:30", title: "水上巴士 / 桥西漫步", text: "到拱宸桥码头坐水上巴士去信义坊。五一如果水上巴士排队超过40分钟，果断放弃，改在拱宸桥边坐观光游船，或者买杯咖啡沿着桥西历史街区慢慢散步。" },
          { time: "17:40-20:00", title: "本地烟火：胜利河美食街", text: "逛到胜利河，红灯笼亮起。直奔老头儿油爆虾吃甜口油爆虾、带鱼，或去新庭记吃精致江浙菜。吃完在河边消食，回酒店洗澡。" }
        ]
      },
      {
        title: "Day 2：5月4日",
        summary: "湖州街亚朵 → 幻想岛 → 龙坞茶山 → 上海。上午森泊幻想岛放电，下午车上午睡后转场茶山。",
        events: [
          { time: "08:30-09:30", title: "窗边慢早，退房上车", text: "悠闲吃完酒店自助早，退房出发。" },
          { time: "10:30-13:30", title: "神兽放电：湘湖森泊·幻想岛", text: "换上自己带的防滑袜，让小女孩在巨大的树屋、超长滑梯里疯玩。大人在懒人沙发区躺平喝咖啡监视。只玩幻想岛室内外无动力乐园，不买通票。" },
          { time: "13:30-14:20", title: "午餐时间", text: "就在乐园里的雨林餐厅吃儿童餐或披萨。吃完带孩子去洗手间换件干爽的衣服。" },
          { time: "14:30-15:20", title: "神仙转场：车上午休", text: "导航至杭州龙坞茶镇、上城埭村或大清谷。这45分钟车程，小女孩在安全座椅上必定秒睡充电。" },
          { time: "15:30-17:30", title: "绿野仙踪：龙坞茶山", text: "下车睁眼就是满眼翠绿的起伏茶山。花几十块给女儿租套采茶服和小竹篓，化身采茶仙女拍大片。大人泡杯龙井解乏。" },
          { time: "17:30-19:00", title: "地道晚餐：茶山农家乐", text: "在龙坞找家农家乐，点土鸡煲、油焖春笋、茶香排骨，用鸡汤给孩子拌饭。" },
          { time: "19:00+", title: "换睡衣，无痛返程", text: "吃饱后给女儿换上睡衣或家居服，从龙坞旁边上杭州绕城高速转沪昆高速，晚上9点半左右到家。" }
        ]
      }
    ],
    route: [
      { name: "小河直街历史文化街区", note: "08:30-10:30：找猫咪，吃定胜糕、买糖葫芦。", point: "30.3158, 120.1418" },
      { name: "杭州运河湖州街亚朵酒店", note: "13:20-15:00：酒店午休，备注优先打扫大床房。", point: "30.3188, 120.1346" },
      { name: "拱宸桥码头 / 桥西历史街区", note: "15:30-17:30：水上巴士或桥西漫步。", point: "30.3222, 120.1429" },
      { name: "信义坊", note: "水上巴士可选下船点，排队超过40分钟则放弃。", point: "30.3036, 120.1555" },
      { name: "胜利河美食街", note: "17:40-20:00：老头儿油爆虾或新庭记。", point: "30.3038, 120.1604" },
      { name: "湘湖开元森泊幻想岛", note: "10:30-13:30：只玩幻想岛无动力乐园，穿自带防滑袜。", point: "30.1627, 120.2243" },
      { name: "龙坞茶山 / 龙坞茶镇", note: "15:30-17:30：租采茶服和小竹篓拍照，晚饭吃农家乐。", point: "30.1660, 120.0538" }
    ],
    costs: [
      ["交通：高速费 0 元，往返及市内油费", "约 200 元"],
      ["住宿：杭州运河湖州街亚朵酒店 1 晚", "400 元"],
      ["森泊幻想岛门票：1大1小/2大1小", "约 200-280 元"],
      ["采茶服租赁 + 备用游船体验", "约 80 元"],
      ["Day 1 午餐 + 小吃", "约 150 元"],
      ["Day 1 胜利河晚饭", "约 250 元"],
      ["Day 2 森泊午饭", "约 200 元"],
      ["Day 2 龙坞土鸡煲晚饭", "约 280 元"],
      ["合计", "约 1,760-1,840 元", "total"]
    ],
    photos: [
      { title: "小河直街历史文化街区", caption: "店铺小巷和青石板路", src: "https://meizi-zjol-1577-pub.zjol.com.cn/zjnews/202411/1861433946356105216_1280px.jpg" },
      { title: "杭州运河湖州街亚朵酒店", caption: "午休回血点", src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604728493.jpg?k=6cbdc5e3e9487ca229b0819dd67ad9d6abb8ad1bf1d80e89f138736a9fe31c90&o=" },
      { title: "桥西 / 拱宸桥", caption: "水上巴士和运河散步", src: "https://n.sinaimg.cn/sinakd20210520ac/213/w2048h1365/20210520/3ba6-kqhwhrk3851025.jpg" },
      { title: "胜利河美食街", caption: "运河边晚饭和夜色", src: "https://att2.citysbs.com/hangzhou/2022/07/16/17/middle_1800x1350-172212_v3_18431657963332399_6100f1385970b6d8c671659234fb26ed.jpg" },
      { title: "湘湖开元森泊·幻想岛", caption: "室内外无动力乐园", src: "https://20366730.s21i.faiusr.com/4/ABUIABAEGAAgr_rvqwYoo-rQDjDEEzibDA.png" },
      { title: "龙坞茶山", caption: "采茶服、小竹篓和茶山大片", src: "https://newbbs-fd.zol-img.com.cn/t_s1200x5000/g7/M00/0E/0E/ChMkLGQ5ZhSITJP1ADtx9yCzZ34AAO6uwGgZvgAO3IP041.jpg" }
    ]
  }
];

const tripList = document.getElementById("trip-list");
const detailPanel = document.getElementById("detail-panel");
const menuItems = document.querySelectorAll("[data-menu]");

function renderTripList() {
  tripList.innerHTML = trips.map((trip) => `
    <button class="trip-card" type="button" data-trip-id="${trip.id}">
      <h3>${trip.title}</h3>
      <p>${trip.summary}</p>
      <div class="trip-meta">
        <span class="pill">${trip.period}</span>
        <span class="pill">${trip.location}</span>
        <span class="pill">${trip.people}</span>
      </div>
    </button>
  `).join("");
}

function renderProfileDetail() {
  detailPanel.innerHTML = `
    <section class="empty-detail">
      <p class="eyebrow">Profile</p>
      <h2>罗玉姣</h2>
      <div class="info-grid">
        <div><span>姓名</span><strong>罗玉姣</strong></div>
        <div><span>性别</span><strong>女</strong></div>
      </div>
      <p>点击中间的杭州行程卡片后，这里会切换为完整旅游行程详情。</p>
    </section>
  `;
}

function renderCards(cards) {
  return `<div class="card-grid">${cards.map((card) => `
    <article class="mini-card">
      <h4>${card.title}</h4>
      <ul>${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("")}</div>`;
}

function renderTimeline(day) {
  return `
    <section class="detail-section">
      <h3>${day.title}</h3>
      <p class="day-summary">${day.summary}</p>
      <div class="timeline">
        ${day.events.map((event) => `
          <article class="event">
            <div class="event-top">
              <h4>${event.title}</h4>
              <span class="time">${event.time}</span>
            </div>
            <p>${event.text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTripDetail(trip) {
  detailPanel.innerHTML = `
    <div class="detail-wrap">
      <section class="detail-hero">
        <p class="eyebrow">Selected Trip</p>
        <h2>${trip.title}</h2>
        <p>${trip.subtitle}</p>
        <div class="trip-meta">
          <span class="pill">${trip.period}</span>
          <span class="pill">${trip.location}</span>
          <span class="pill">${trip.hotel}</span>
        </div>
        <div class="fact-grid">
          ${trip.facts.map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
      </section>

      <section class="detail-section">
        <h3>倒计时3天：今天必须做完</h3>
        ${renderCards(trip.actions)}
      </section>

      <section class="detail-section">
        <h3>天气与穿搭</h3>
        ${renderCards(trip.prep)}
      </section>

      ${trip.days.map(renderTimeline).join("")}

      <section class="detail-section">
        <h3>路线点位</h3>
        <div class="route-grid">
          ${trip.route.map((stop, index) => `
            <article class="route-stop">
              <h4>${index + 1}. ${stop.name}</h4>
              <p>${stop.note}</p>
              <small>坐标：${stop.point}</small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="detail-section">
        <h3>总费用</h3>
        <div class="cost-list">
          ${trip.costs.map(([label, value, type]) => `
            <div class="cost-row ${type === "total" ? "total" : ""}">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="detail-section">
        <h3>地点照片</h3>
        <div class="photo-grid">
          ${trip.photos.map((photo) => `
            <article class="photo-card">
              <img src="${photo.src}" alt="${photo.title}" loading="lazy">
              <h4>${photo.title}</h4>
              <p>${photo.caption}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function selectTrip(tripId) {
  const trip = trips.find((item) => item.id === tripId);
  if (!trip) return;

  document.querySelectorAll("[data-trip-id]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.tripId === tripId);
  });

  renderTripDetail(trip);
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => menuItem.classList.remove("is-active"));
    item.classList.add("is-active");
    renderTripList();
    renderProfileDetail();
  });
});

tripList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-trip-id]");
  if (!card) return;
  selectTrip(card.dataset.tripId);
});

renderTripList();
renderProfileDetail();

console.log('1.При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50  \n2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50	\n3.В разделе contacts реализован select с выбором городов +12.5(выполнено частично)\nИтоговая оценка: 112.5 баллов')
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-list"),
    navItem = document.querySelectorAll(".nav-item"),
    hamburger = document.querySelector(".hamb");
    menuActive = document.querySelector(".nav-list_active");
    pricesTab = document.querySelectorAll(".prices-item-tab");
    pricesArrow = document.querySelectorAll(".prices-item-arrow");
    pricesAccord = document.querySelectorAll(".prices-item-accord");
    contactsItem = document.querySelector(".contacts-item");
    contactsAccord = document.querySelector(".contacts-accord");
    contactsCity = document.querySelectorAll(".contacts-accord-city");
    contactsCallUs = document.querySelector(".contacts-callus");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamb_active");
    menu.classList.toggle("nav-list_active");
  });

  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamb_active");
      menu.classList.toggle("nav-list_active");
    });
  });
serviceBtn = document.querySelectorAll(".service-btn"),
serviceItem = document.querySelectorAll(".service-item"),
(x = 0),
serviceBtn.forEach(function (t) {
  t.addEventListener("mouseover", function () {
      x > 1 &&
        !t.classList.contains("service-btn_active") &&
        (t.style = "cursor: not-allowed");
  }),
    t.addEventListener("mouseout", function () {
      x < 2 && t.classList.remove("hover"),
        x > 1 && !t.classList.contains("service-btn_active") && (t.style = "");
    }),
    t.addEventListener("mousedown", function () {
      x < 2 && t.classList.add("click"),
        x > 1 &&
          !t.classList.contains("service-btn_active") &&
          (t.style = "cursor: not-allowed;");
    }),
    t.addEventListener("mouseup", function () {
      x < 2 && t.classList.remove("click"),
        x > 1 && !t.classList.contains("service-btn_active") && (t.style = "");
    }),
    t.addEventListener("click", function () {
      t.classList.contains("service-btn_active")
        ? (t.classList.remove("service-btn_active"), x--)
        : x < 2 && (t.classList.add("service-btn_active"), x++),
        serviceBtn.forEach(function (t) {
          t.classList.contains("service-btn_active")
            ? serviceItem.forEach(function (a) {
                a.getAttribute("data") === t.innerHTML &&
                  a.classList.remove("blur");
              })
            : t.classList.contains("service-btn_active") ||
              serviceItem.forEach(function (a) {
                a.getAttribute("data") === t.innerHTML &&
                  a.classList.add("blur");
              });
        }),
        0 == x &&
          serviceItem.forEach(function (t) {
            t.classList.remove("blur");
          });
    });
});
  pricesTab[0].addEventListener("click", () => {
    pricesTab[0].classList.toggle("prices-item-tab_active");
    pricesAccord[0].classList.toggle("prices-item-accord_active");
    pricesArrow[0].classList.toggle("prices-item-arrow_active");
    pricesTab[1].classList.remove("prices-item-tab_active");
    pricesAccord[1].classList.remove("prices-item-accord_active");
    pricesArrow[1].classList.remove("prices-item-arrow_active");
    pricesTab[2].classList.remove("prices-item-tab_active");
    pricesAccord[2].classList.remove("prices-item-accord_active");
    pricesArrow[2].classList.remove("prices-item-arrow_active");
  });
  pricesTab[1].addEventListener("click", () => {
    pricesTab[1].classList.toggle("prices-item-tab_active");
    pricesAccord[1].classList.toggle("prices-item-accord_active");
    pricesArrow[1].classList.toggle("prices-item-arrow_active");
    pricesTab[0].classList.remove("prices-item-tab_active");
    pricesAccord[0].classList.remove("prices-item-accord_active");
    pricesArrow[0].classList.remove("prices-item-arrow_active");
    pricesTab[2].classList.remove("prices-item-tab_active");
    pricesAccord[2].classList.remove("prices-item-accord_active");
    pricesArrow[2].classList.remove("prices-item-arrow_active");
  });
  pricesTab[2].addEventListener("click", () => {
    pricesTab[2].classList.toggle("prices-item-tab_active");
    pricesAccord[2].classList.toggle("prices-item-accord_active");
    pricesArrow[2].classList.toggle("prices-item-arrow_active");
    pricesTab[0].classList.remove("prices-item-tab_active");
    pricesAccord[0].classList.remove("prices-item-accord_active");
    pricesArrow[0].classList.remove("prices-item-arrow_active");
    pricesTab[1].classList.remove("prices-item-tab_active");
    pricesAccord[1].classList.remove("prices-item-accord_active");
    pricesArrow[1].classList.remove("prices-item-arrow_active");
  });
  contactsItem.addEventListener("click", () => {
    contactsItem.classList.toggle("contacts-item_active");
    contactsAccord.classList.toggle("contacts-accord_active");
  });
  contactsCity.forEach((item) => {
    item.addEventListener("click", () => {
      contactsAccord.classList.toggle("contacts-accord_active");
      contactsCallUs.classList.toggle("contacts-callus_active");
    });
  });
})
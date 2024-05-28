// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

//пример импорта библиотеки swiper из node_modules:
// import Swiper, { Navigation, Pagination } from "swiper";

// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Pagination],
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//   },
// })

//кастомный select
// const element1 = document.querySelector("select");
// const choices1 = new Choices(element1, {
//   // renderChoiceLimit: 3,
//   // maxItemCount: 3,
//   itemSelectText: "",
//   searchEnabled: false,
//   shouldSort: false,
//   noResultsText: 'ни чего не найдено',
//   placeholder: true,
// });

const fieldInput1 = document.querySelector("#field-input-1");
const btn1 = document.querySelector("#btn-1");

if (fieldInput1) {
  fieldInput1.addEventListener("input", function () {
    if (fieldInput1.value.length > 0) {
      btn1.classList.remove("btn_disabled");
    } else {
      btn1.classList.add("btn_disabled");
    }
  });
}

const inputSearch = document.querySelectorAll(".input_search");
if (inputSearch) {
  inputSearch.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_search_active");
    });
  });
}

const inputFields = document.querySelectorAll(".input_search-field");

if (inputFields) {
  inputFields.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_search-field_active");
    });
  });
}

const inputDate = document.querySelectorAll(".input_date");
if (inputDate) {
  inputDate.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_date_active");
    });
  });
}

const selectField = document.querySelectorAll(".my-select");
const selectFieldMult = document.querySelectorAll(".my-select_multiple");

const selectList = document.querySelectorAll(".my-select__list");
const selectItem = document.querySelectorAll(".my-select__item");

if (selectFieldMult) {
  selectFieldMult.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("my-select_multiple_open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".my-select_multiple")) {
      selectFieldMult.forEach((item) => {
        item.classList.remove("my-select_multiple_open");
      });
    }
  });
}

if (selectField) {
  selectField.forEach((item) => {
    item.addEventListener("click", function (e) {
      item.classList.toggle("my-select_open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".my-select")) {
      selectField.forEach((item) => {
        item.classList.remove("my-select_open");
      });
    } else {
    }
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      const text = item.closest(".my-select").querySelector(".my-select__text");
      text.innerHTML = item.innerHTML;
      text.classList.add("my-select__text_active");
      // text.setAttribute("data-value", item.getAttribute("data-value"));
      e.stopPropagation();
      // console.log(item);
      item.closest(".my-select").classList.remove("my-select_open");
      item.closest(".my-select").classList.add("my-select_active");
    });
  });
}

// const popupCloseIcon = document.querySelectorAll(".popup-close");
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest(".popup")); //ближайший родитель класса popup
//       e.preventDefault();
//     });
//   }
// }

const navLlink = document.querySelectorAll(".nav__link");
const thisPage = document.querySelector(".page").innerHTML;
if (navLlink) {
  navLlink.forEach((item) => {
    if (item.innerHTML.includes(thisPage)) {
      item.classList.add("nav__link_active");
    }
  });
}

// setTimeout(function () {
//   document.querySelector("main").classList.add("main_active");
// }, 200);

// simplebar:
if (document.querySelector(".my-simplebar-1")) {
  const simpleBar1 = new SimpleBar(document.querySelector(".my-simplebar-1"), {
    scrollbarMaxSize: 85,
    autoHide: false,
    forceVisible: true,
  });
}

if (document.querySelector(".my-simplebar-2")) {
  const simpleBar2 = new SimpleBar(document.querySelector(".my-simplebar-2"), {
    scrollbarMaxSize: 85,
    autoHide: false,
    forceVisible: true,
  });
}

if (document.querySelectorAll(".my-simplebar-input")) {
  document.querySelectorAll(".my-simplebar-input").forEach((item) => {
    new SimpleBar(item, {
      scrollbarMaxSize: 45,
      scrollbarMinSize: 33,
      autoHide: false,
      forceVisible: true,
    });
  });
}

const btnVariant = document.querySelectorAll(".btn-variant");
if (btnVariant) {
  btnVariant.forEach((item) => {
    item.addEventListener("click", function () {
      // window.location.href = item.getAttribute("href");
      window.location.href = "calculating-done.html";
    });
  });
}

const btnCancel = document.querySelectorAll(".btn-cancel");
if (btnCancel) {
  btnCancel.forEach((item) => {
    item.addEventListener("click", function () {
      window.location.href = "calculating.html";
    });
  });
}

// popup:
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
// const btn = document.querySelector(".project-btn");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      // закрываем текущий открытый попап, если он есть
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    console.log(curentPopup);
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  console.log(lockPaddingValue);
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

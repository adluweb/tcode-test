import "./import/modules";
import "./import/components";

//popUp
const btnNav = document.querySelector(".nav__item-button");
const closeBtn = document.querySelector(".modal__top--close");
const mobileBtn = document.querySelector(".mobileBtn");
const popUp = document.querySelector(".popUp");
const btns = [btnNav, closeBtn,mobileBtn];
btns.forEach((item) => {
  item.addEventListener("click", () => {
    console.log('active');
    popUp.classList.toggle("active");
  });
});

//burger
const burgerBtn = document.querySelector(".nav__burger");
const mobileMenuClose = document.querySelector(".mobile__close");
const mobileMenu = document.querySelector(".mobile__list");
const btnsMobile = [burgerBtn, mobileMenuClose];
btnsMobile.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.toggle("activeBurger");
  });
});


//движение заднего фона от курсора
const movementStrength = 225;
const width = movementStrength / window.innerWidth;
document.querySelector("body").addEventListener("mousemove", (e) => {
  const pageX = e.pageX - window.innerWidth / 2;
  const newvalueX = width * pageX * -1 - 25;
  document.querySelector("body").style.backgroundPosition = newvalueX + "px";
});


//запретить отправку сообщения
const submitBtm = document.querySelector(".modal__btn");
submitBtm.addEventListener("click", (e) => {
  e.preventDefault();
});


//Выбор даты
$(function () {
  $.datepicker.regional["ru"] = {
    closeText: "Закрыть",
    prevText: "Предыдущий",
    nextText: "Следующий",
    currentText: "Сегодня",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthNamesShort: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    dayNames: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Не",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  };
  $.datepicker.setDefaults($.datepicker.regional["ru"]);

  $(".dates").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});

$(".dates").each(function () {
  $(this).on("change", function () {
    console.log($(this).val());
  });
});

var show_btn = document.querySelector("button[name=show-form]");
var hotel_form = document.querySelector(".hotel-form");
var found_btn = document.querySelector(".btn-found");

var plus_btn_adults = document.querySelector(".button-plus-adults");
var minus_btn_adults = document.querySelector(".button-minus-adults");
var plus_btn_children = document.querySelector(".button-plus-children");
var minus_btn_children = document.querySelector(".button-minus-children");

var date_arrival = document.querySelector("input[name=date-arrival]");
var date_departure = document.querySelector("input[name=date-departure]");

var adults = document.querySelector("input[name=count-adults]");
var children = document.querySelector("input[name=count-children]");

/*
Проверка поддержки localStorage
*/

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("date-arrival");
  } catch (err) {
    isStorageSupport = false;
  }

/*
Проверка на валидность
*/


hotel_form.addEventListener("submit", function (evt) {
  console.log('here');
  if (!date_arrival.value || !date_departure.value) {
    evt.preventDefault();
    console.log('preventDefault');
    hotel_form.classList.remove("modal-error");
    hotel_form.offsetWidth = hotel_form.offsetWidth;
    console.log('add error');
    hotel_form.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("date_arrival", date_arrival.value);
      localStorage.setItem("date_departure", date_departure.value);
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});

/*
Скрытие формы, которая по умолчанию должна быть открыта
*/

hotel_form.classList.add('visually-hidden');


/*
Анимация открытия/закрытия окна формы
*/

show_btn.onclick = function() {
  hotel_form.classList.toggle("visually-hidden");
  hotel_form.classList.toggle("show");
};

/*
Счетчики посетителей
*/

plus_btn_adults.onclick = function() {
  adults.value++;
}

minus_btn_adults.onclick = function() {
  adults.value--;
  if(adults.value < 0) {
    adults.value = 0;
  }
}

plus_btn_children.onclick = function() {
  children.value++;
}

minus_btn_children.onclick = function() {
  children.value--;
  if(children.value < 0) {
    children.value = 0;
  }
}

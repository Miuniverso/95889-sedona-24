var show_btn = document.querySelector("button[name=show-form]");
var hotel_form = document.querySelector(".hotel-form");
var found_btn = document.querySelector(".btn-found");
var plus_btn = document.querySelector("button[name=button-plus]");
var minus_btn = document.querySelector("button[name=button-minus]");

var date_arrival = document.querySelector("input[name=date-arrival]");
var date_departure = document.querySelector("input[name=date-departure]");

var adults = document.querySelector("input[name=count-adults]");
var children = document.querySelector("input[name=count-children]");

// localStorage {key: "adults", length: adults.value }


var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("date-arrival");
  } catch (err) {
    isStorageSupport = false;
  }


hotel_form.classList.add('visually-hidden');

show_btn.onclick = function() {
  hotel_form.classList.toggle("visually-hidden");
  hotel_form.classList.toggle("show");
};

plus_btn.onclick = function() {
  adults.value++;
}

minus_btn.onclick = function() {
  adults.value--;
  if(adults.value < 0) {
    adults.value = 0;
  }
}

found_btn.addEventListener("submit", function (evt) {
  if (!date_arrival.value || !date_departure.value) {
    evt.preventDefault();
    hotel_form.classList.remove("modal-error");
    hotel_form.offsetWidth = popup.offsetWidth;
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

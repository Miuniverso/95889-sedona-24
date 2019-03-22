var show_btn = document.querySelector("button[name=show-form]");
var hotel_form = document.querySelector(".hotel-form");
var found_btn = document.querySelector(".btn-found");
var plus_btn = document.querySelector("button[name=button-plus]");
var minus_btn = document.querySelector("button[name=button-minus]");
var adults = document.querySelector("input[name=count-adults]");
var children = document.querySelector("input[name=count-children]");

// localStorage {key: "adults", length: adults.value }

show_btn.onclick = function() {
  hotel_form.classList.toggle("visually-hidden");
  hotel_form.classList.toggle("show");
};


plus_btn.onclick = function() {
  adults.value++;
  // console.log(previousElementSibling[0]);
  adults.value++;
}

minus_btn.onclick = function() {
  adults.value--;
  if(adults.value < 0) {
    adults.value = 0;
  }
}

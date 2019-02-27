var show_btn = document.querySelector("button[name=show-form]");
var hotel_form = document.querySelector(".hotel-form");
var found_btn = document.querySelector(".btn-found");
// console.log(hotel_form)

show_btn.onclick = function() {
  console.log("CLICK!");
  hotel_form.classList.add("show");
};

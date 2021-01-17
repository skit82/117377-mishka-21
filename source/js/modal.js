for (var btn__order = document.querySelectorAll(".flashcard__button--order"), popup = document.querySelector(".modal__order"), overlay = document.querySelector(".modal__overlay"), i = 0; i < btn__order.length; i++)
btn__order[i].addEventListener("click", function(e) {
  e.preventDefault(),
  popup.classList.add("modal__order--show"),
  overlay.classList.add("modal__overlay--show")
}),
overlay.addEventListener("click", function(e) {
  popup.classList.remove("modal__order--show"),
  overlay.classList.remove("modal__overlay--show")
}),
window.addEventListener("keydown", function(e) {
  27 === e.keyCode && popup.classList.contains("modal__order--show") && (popup.classList.remove("modal__order--show"),
  overlay.classList.remove("modal__overlay--show"))
});

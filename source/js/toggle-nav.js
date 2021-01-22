var navMain = document.querySelector(".main-nav__box"),
  navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav__box--no-js"),
navToggle.classList.remove("main-nav__toggle--no-js"),
navToggle.addEventListener("click", function() {
  navMain.classList.contains("main-nav__box--closed") ? (navMain.classList.remove("main-nav__box--closed"),
  navMain.classList.add("main-nav__box--opened"),
  navToggle.classList.remove("main-nav__toggle--closed"),
  navToggle.classList.add("main-nav__toggle--opened")) : (navMain.classList.add("main-nav__box--closed"),
  navMain.classList.remove("main-nav__box--opened"),
  navToggle.classList.add("main-nav__toggle--closed"),
  navToggle.classList.remove("main-nav__toggle--opened"))
});

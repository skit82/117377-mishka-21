"use strict";

var BREAKPOINTS = {
  mobile: "768px",
  tablet: "768px",
  desktop: "1150px"
};

var toggleButton = document.querySelector(".js-hamburger-button"),
  mainNav = document.querySelector(".main-nav__box");


function loadShow() {
  toggleButton.classList.remove("visually-hidden");
}

function hideOnMedia(e) {
  if (e.matches) {
    mainNav.classList.remove("main-nav__box-navigation");
  } else {
    mainNav.classList.add("main-nav__box-navigation");
  }
}

var mediaEvent = window.matchMedia("(min-width: " + BREAKPOINTS.tablet.toString() + ")");
hideOnMedia(mediaEvent);
mediaEvent.addListener(hideOnMedia);

window.addEventListener("load", loadShow);

toggleButton.addEventListener("click", function() {
  this.classList.toggle("main-nav__toggle--close");
  mainNav.classList.toggle("main-nav__box-navigation--active");
});

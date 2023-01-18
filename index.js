"use strict";
AOS.init();
const body = document.body;
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  pageYOffset > header.offsetHeight &&
    (header.classList.contains("_fixed") || header.classList.add("_fixed")),
    0 === pageYOffset &&
      header.classList.contains("_fixed") &&
      header.classList.remove("_fixed");
}),
  console.log(header);

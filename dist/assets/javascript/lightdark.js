"use strict";

function toggleDarkLight() {
  var html = document.querySelector("html");
  var currentClass = html.className;
  html.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
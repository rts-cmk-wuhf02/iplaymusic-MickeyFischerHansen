function toggleDarkLight() {
    let html = document.querySelector("html");
    let currentClass = html.className;
    html.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
  
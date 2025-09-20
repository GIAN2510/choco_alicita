// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLeft = document.querySelector(".nav-left");

  // al hacer click en el botón hamburguesa
  hamburger.addEventListener("click", () => {
    navLeft.classList.toggle("active");
  });
});

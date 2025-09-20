// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLeft = document.querySelector(".nav-left");s
  items.forEach(it => it.style.flex = `0 0 ${100 / itemsPerView}%`);


  // al hacer click en el botón hamburguesa
  hamburger.addEventListener("click", () => {
    navLeft.classList.toggle("active");
  });
});

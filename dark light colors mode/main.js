const darkMode = document.querySelector(".dark-light-mode");
const colorDiv = document.querySelector(".colors-palette");
const colorsArrow = document.querySelector(".colors-palette .arrow");
const darkIcon = document.querySelector(".dark-light-mode i.fa-moon");
const lightIncon = document.querySelector(".dark-light-mode i.fa-sun");
const header = document.querySelector("header");
const txt = document.querySelector(".big-text");
const btn = document.querySelector(".big-text a");
const h2 = document.querySelector(".big-text h2");
const span = document.querySelector(".big-text h3 span");
const h3 = document.querySelector(".big-text h3");

colorDiv.addEventListener("click", () => {
    colorsArrow.classList.toggle("second");
});

darkMode.addEventListener("click", () => {
    darkIcon.classList.toggle("hidden");
    lightIncon.classList.toggle("hidden");
    colorDiv.classList.toggle("hidden");
    header.classList.toggle("dark");
    darkMode.classList.toggle("dark");
    txt.classList.toggle("dark");
    btn.classList.toggle("dark");
    h2.classList.toggle("dark");
    span.classList.toggle("dark");
    h3.classList.toggle("dark");
});



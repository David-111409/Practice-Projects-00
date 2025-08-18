const nav = document.querySelector("nav");
const humb = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");

humb.addEventListener("click", () => {
    nav.classList.toggle("active");
    ul.classList.toggle("active");
});

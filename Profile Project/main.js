

const btn = document.querySelector("#menu-icon");
const nav = document.querySelector("ul#nav");
console.log(nav);
btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("fa-times")
})
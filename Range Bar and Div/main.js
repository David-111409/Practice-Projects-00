const show = document.querySelector(".show");
const input = document.querySelector("input");

input.value = 20;
input.addEventListener("input", (e) => {
    show.textContent = e.target.value;
})

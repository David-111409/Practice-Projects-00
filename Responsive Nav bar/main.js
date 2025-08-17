const bars = document.querySelector(".fa-bars");
const list = document.getElementById("list");
bars.addEventListener("click", () => {
    list.classList.toggle("active")
});

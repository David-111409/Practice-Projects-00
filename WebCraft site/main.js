const menu = document.getElementById("menu");
const cross = document.getElementById("cross");
const wid_menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    wid_menu.classList.toggle("hide");
    if (menu.textContent === "✖") {
        menu.textContent = "☰";
        wid_menu.style.left = "-100%";
    } else {
        wid_menu.style.left = "0%";
        menu.textContent = "✖";
    }
});


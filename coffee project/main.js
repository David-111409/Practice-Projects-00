const close = document.querySelector(".close");
const links = document.querySelector(".navbar .menu-links");
const bars = document.querySelector(".bars");

const header = document.querySelector("header");
bars.addEventListener("click", () => {
    links.classList.add("not-active");
    header.classList.add("blur");
});

close.addEventListener("click", () => {
    links.classList.toggle("not-active");
    header.classList.remove("blur");
});

document.addEventListener("click", (e) => {
    const el = e.target.classList.contains("blur");
    const other = links.classList.contains("not-active");
    if (el && other) {
        links.classList = ["menu-links"];
        header.classList.remove("blur");
    }
});

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const images = document.querySelectorAll(".image-container img");
const circles = document.querySelectorAll(".circles .circle");
let ind = 0;
next.addEventListener("click", () => {
    ind = Math.abs(ind + 1) % 4;
    removeActiveFromAllAddToOne(ind % 4, images);
    removeActiveFromAllAddToOne(ind % 4, circles);
});

circles.forEach((c, index) => {
    c.addEventListener("click", () => {
        ind = index;
        removeActiveFromAllAddToOne(ind, circles);
        removeActiveFromAllAddToOne(ind, images);
    });
});

prev.addEventListener("click", () => {
    if (ind === 0) ind = 4;
    ind = Math.abs(ind - 1) % 4;
    removeActiveFromAllAddToOne(ind, images);
    removeActiveFromAllAddToOne(ind, circles);
});

function removeActiveFromAllAddToOne(ind, elements) {
    elements.forEach((elem) => {
        elem.classList.remove("active");
    });
    elements[ind].classList.add("active");
}

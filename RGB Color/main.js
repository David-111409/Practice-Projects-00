const rRange = document.getElementById("r");
const gRange = document.getElementById("g");
const bRange = document.getElementById("b");
rRange.value = "0";
bRange.value = "0";
gRange.value = "0";

const showR = document.getElementById("showR");
const showG = document.getElementById("showG");
const showB = document.getElementById("showB");

function changeBack(show, input) {
    document.body.style.backgroundColor = `rgb(${rRange.value} , ${gRange.value}, ${bRange.value})`;
    show.textContent = input.value;
}

rRange.addEventListener("input", () => {
    changeBack(showR, rRange);
});

gRange.addEventListener("input", () => {
    changeBack(showG, gRange);
});

bRange.addEventListener("input", () => {
    changeBack(showB, bRange);
});

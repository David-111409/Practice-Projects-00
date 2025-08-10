const area = document.getElementById("area");
const show = document.getElementById("num");
let mx = area.getAttribute("length-data");
console.log(mx);
area.addEventListener("input", () => {
    let l = area.value.length;
    if (l > mx) {
        show.classList.add("red");
        show.textContent = `${l} / ${mx}`;
        area.classList.add("redBorder");
    } else {
        show.textContent = `${l} / ${mx}`;
        show.classList.remove("red");
        area.classList.remove("redBorder");
    }
});

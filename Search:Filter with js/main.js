const input = document.getElementById("input");
const divs = document.querySelectorAll(".words div");
const count = document.querySelector(".count");
input.value = "";
let c = 0;

input.addEventListener("input", (e) => {
    c = 0;
    let v = e.target.value.trim().toLowerCase();
    if (v) {
        divs.forEach((el, ind) => {
            if (el.textContent.toLowerCase().includes(v)) {
                el.style.display = "block";
                c++;
            } else {
                el.style.display = "none";
            }
        });
    } else {
        divs.forEach((el) => (el.style.display = "block"));
    }
    count.textContent = c;
});

const p = document.querySelector(".img-text p");
const btn = document.getElementById("roll");

function genRandeom() {
    let n = Math.floor(Math.random() * 7) ;
    p.textContent =  n;
}
btn.onclick = genRandeom;

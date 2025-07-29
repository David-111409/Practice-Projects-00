const submit = document.getElementById("submit");
const pop = document.getElementById("pop");
const okButton = document.getElementById("ok");
okButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
});
submit.addEventListener("click", (e) => {
    pop.style.top = "30%";
});

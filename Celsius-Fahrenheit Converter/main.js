const cel = document.getElementById("celsius");
const fahr = document.getElementById("Fahr");

cel.addEventListener("input", () => {
    if (cel.value) {
        fahr.value = ((cel.value * 9) / 5 + 32).toFixed(2);
    } else fahr.value = "";
});

fahr.addEventListener("input", () => {
    if (fahr.value) {
        cel.value = (((fahr.value - 32) * 5) / 9).toFixed(2);
    } else cel.value = "";
});

const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    numValue = document.querySelector(".num-value");

minus.addEventListener("click", () => {
    let val = +numValue.textContent;
    if (val > 1) {
        if (val <= 10) {
            numValue.textContent = `0${val - 1}`;
        } else numValue.textContent = val - 1;
    }
});

plus.addEventListener("click", () => {
    let val = +numValue.textContent;
    if (val < 9) {
        numValue.textContent = `0${val + 1}`;
    } else numValue.textContent = val + 1;
});

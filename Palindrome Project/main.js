const resultDiv = document.getElementById("result");
const inputValue = document.getElementById("inputValue");
const btn = document.getElementById("check");
const spanVal = document.getElementById("inpt");

inputValue.addEventListener("input", () => {
    let val = inputValue.value.replace(/[^a-z0-9]/gi, "");
    if (!val.trim()) {
        btn.classList.remove("active");
        // resultDiv.innerText = "";
    } else {
        btn.classList.add("active");
    }
});

btn.addEventListener("click", () => {
    resultDiv.innerHTML = "";

    const span = document.createElement("span");

    let val = inputValue.value.trim().replace(/[^a-z0-9\s]/gi, "");

    span.style.color = "#aa57cc";

    let copyVal = val.replaceAll(" ", "").toLowerCase();

    let rev = copyVal.split("").reverse().join("");

    if (copyVal === rev) {
        span.innerText = `"${val}"`;
        resultDiv.append("Yes, ", span);
        resultDiv.append(" is a palindrome!");
    } else {
        console.log(resultDiv.childNodes);
        span.innerText = `"${val}"`;
        resultDiv.append("No, ", span);
        resultDiv.append(" is not a palindrome!");
    }
    inputValue.value = "";
});



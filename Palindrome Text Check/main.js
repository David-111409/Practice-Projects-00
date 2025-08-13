const input = document.getElementById("input");
const but = document.getElementById("btn");
const show = document.getElementById("show");

but.addEventListener("click", () => {
    const text = input.value;
    let lettersOnly = text
        .match(/[a-zA-Z0-9]/g)
        .join("")
        .toLowerCase();
    let revLetters = lettersOnly.split("").reverse().join("");
    if (lettersOnly === revLetters) show.textContent = "Yes! It's a palindrome";
    else show.textContent = "Nope! Not a palindrome";
});

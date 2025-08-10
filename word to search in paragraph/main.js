let word = document.getElementById("word");
let but = document.getElementById("search");
const p = document.querySelector("p");
const originalText = p.textContent; // keep the original

but.addEventListener("click", (e) => {
    e.preventDefault();

    const wordToHighlight = word.value;

    const regex = new RegExp(`(${wordToHighlight})`, "gi");

    p.innerHTML = originalText.replace(
        regex,
        (match) => `<mark>${wordToHighlight}</mark>`
    );
});

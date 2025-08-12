const area = document.getElementById("area");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

area.addEventListener("input", () => {
    let val = area.value;
    let word = val.trim().split(/\s+/).filter(Boolean);

    wordCount.textContent = word.length;
    charCount.textContent = val.length;
});

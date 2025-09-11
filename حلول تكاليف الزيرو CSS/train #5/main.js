
const but = document.getElementById("gn-btn");
const random = document.getElementById("random");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

but.addEventListener("click", () => {
    // let ar = [];
    let word = "";
    for (let i = 0; i < 7; i++) {
        let n = Math.floor(Math.random() * 62);
        word += chars[n];
        // ar.push(n);
    }
    random.textContent = word;
    // console.log(word);
    // console.log(Math.max(...ar));
});

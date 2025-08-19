let div = document.querySelector(".context");
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    div.style.display = "block";
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
});

document.addEventListener("click", (e) => {
    // console.log(e.currentTarget.classList);
    // if (
    //     !e.target.classList.contains("context") &&
    //     !e.target.classList.contains("line")
    // ) {
    //     div.style.display = "none";
    // }
    if (!e.target.closest(".context")) div.style.display = "none";
});

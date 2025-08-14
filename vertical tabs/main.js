const buttons = document.querySelectorAll("button");
const content = document.querySelectorAll(".content");
buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        let index = e.target.id - 1;
        content.forEach((c) => c.classList.remove("active"));
        content[index].classList.add("active");
        buttons.forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
    });
});

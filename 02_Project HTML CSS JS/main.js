const buttons = document.querySelectorAll(".btn");
buttons.forEach(but => {
    but.addEventListener("click", function() {
    const content = but.closest(".accordion-header").nextElementSibling;
     content.classList.toggle("active");
     but.textContent = content.classList.contains("active") ? "-" : "+";
    })
})
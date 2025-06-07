// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(but => {
//     but.addEventListener("click", function() {
//     const content = but.closest(".accordion-header").nextElementSibling;
//      content.classList.toggle("active");
//      but.textContent = content.classList.contains("active") ? "-" : "+";
//     })
// })

const item = document.querySelectorAll(".accordion-item");

item.forEach(ele => {
    const header = ele.querySelector(".accordion-header");
    const content = ele.querySelector(".accordion-content");
    const butt = ele.querySelector(".btn");
    
    header.addEventListener("click", function(){
        content.classList.toggle("active");
        if (content.classList.contains("active")){
            butt.textContent = "-";
        }
        else butt.textContent = "+";
    })
})

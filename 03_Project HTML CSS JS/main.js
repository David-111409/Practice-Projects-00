const next = document.querySelector("button.next");
const previous = document.querySelector("button.prev");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let i = 0;

function showDotAndSlide(index){
    dots.forEach(dot => dot.classList.remove("active"));
    slides.forEach(slide => {
        slide.classList.remove("active");
    })

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide(){
    if (i  === slides.length - 1 ){
        i = -1;
    }

    ++i;
    showDotAndSlide(i);
}

next.addEventListener("click", nextSlide);

function prevSlide(){
    if (i  === 0){
        i = slides.length;
    }

    --i;
    showDotAndSlide(i);
}
previous.addEventListener("click", prevSlide);

function currentSlide(ind){
    i = ind;
    showDotAndSlide(i);
}
dots.forEach((dot, indx) => 
    dot.addEventListener("click", () => currentSlide(indx))
)

// Auto Slider
// setInterval(() => {
//     nextSlide();
// }, 5000);
const conatiners = document.querySelectorAll(".container");
const forward = document.querySelectorAll(".forward");
const back = document.querySelectorAll(".back");
let i = 0;
let l = conatiners.length;

forward.forEach((c) => {
    c.addEventListener("click", () => {
        {
            conatiners[i].classList.add("inactive");
            
                i = (i + 1)  % l;
                conatiners[i].classList.remove("inactive");
                console.log(i);
            }
        }
    );
});


back.forEach(c => {
    c.addEventListener("click", () => {
        {
            conatiners[i].classList.add("inactive");
            if (i === 0){
                i = l -1;
            }
            else i = Math.abs((i - 1)) % l;
            conatiners[i].classList.remove("inactive");
            console.log(i);
        }
    });


})
const send = document.getElementById("send-btn");
const pop = document.querySelector(".pop");
const close = document.getElementById("close-btn");

send.addEventListener("click", () => pop.classList.toggle("active"));

close.addEventListener("click", () => pop.classList.toggle("active"));

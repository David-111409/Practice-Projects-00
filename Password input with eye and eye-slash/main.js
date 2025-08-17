const inputPassword = document.getElementById("password");
const eye = document.querySelector(".fa-solid");

eye.addEventListener("click", () => {
    if (eye.classList.contains("fa-eye")) {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        inputPassword.setAttribute("type", "text");
    } else {
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
        inputPassword.setAttribute("type", "password");
    }
});

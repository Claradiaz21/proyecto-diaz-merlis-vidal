let formlogin = document.querySelector(".formslogin");
let campoEmail = document.querySelector(".email1");
let campoContrasena = document.querySelector(".contrase1");
let errorEmail = document.querySelector(".erroremail");
let errorContrasena = document.querySelector(".errorcontrasena");

formlogin.addEventListener("submit", function (e) {
    errorEmail.innerText = "";
    errorContrasena.innerText = "";

    if (campoEmail.value === "") {
        e.preventDefault();
        errorEmail.innerText = "El campo de email no puede estar vacío";
    }
    else if (campoContrasena.value === "") {
        e.preventDefault();
        errorContrasena.innerText = "El campo de contraseña no puede estar vacío";
    }
    else if (campoContrasena.value.length < 6) {
        e.preventDefault();
        errorContrasena.innerText = "La contraseña debe tener al menos 6 caracteres";
    }
    else {
        localStorage.setItem("email", campoEmail.value);
    }
});
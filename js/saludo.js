let saludo = document.querySelector(".saludo");
let itemLogin = document.querySelector(".itemlogin");
let itemRegistro = document.querySelector(".itemregistro");
let email = localStorage.getItem("email");

if (email !== null) {
    saludo.innerHTML = `Bienvenido: ${email} <a href="./index.html" class="logout">logout</a>`;
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}
let linkLogout = document.querySelector(".logout");
let textoSaludo = document.querySelector(".saludo");
let linkIngresar = document.querySelector(".itemlogin");
let linkRegistrarme = document.querySelector(".itemregistro");

if (linkLogout !== null) {
    linkLogout.addEventListener("click", function (e) {
        e.preventDefault();

        localStorage.removeItem("email");

        textoSaludo.innerHTML = "";
        linkIngresar.style.display = "block";
        linkRegistrarme.style.display = "block";
    });
}
let formulario = document.querySelector(".formulario");
let campoBuscar = document.querySelector(".inputbuscar");
let errorBuscar = document.querySelector(".errorbuscador");

formulario.addEventListener("submit", function (e) {
    if (campoBuscar.value === "") {
        e.preventDefault();
        errorBuscar.innerText = "El campo de búsqueda no puede estar vacío";
    }
    else if (campoBuscar.value.length < 3) {
        e.preventDefault();
        errorBuscar.innerText = "El campo de búsqueda debe tener al menos 3 caracteres";
    }
});

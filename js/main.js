let querySearch = new URLSearchParams(location.search);
let busqueda = querySearch.get("busqueda");
let titulo = document.querySelector(".productosaleatorios");
let mensaje = "";
if (querySearch.has("busqueda") === false || busqueda === "") {
    mensaje = "El campo de búsqueda no puede estar vacío.";
} else if (busqueda.length < 3) {
    mensaje = "La búsqueda debe tener al menos 3 caracteres.";
} else {
    mensaje = "Resultados de búsqueda para: " + busqueda;
}

titulo.innerText = mensaje;


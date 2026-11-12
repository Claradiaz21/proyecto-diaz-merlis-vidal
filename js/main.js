let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
 
let busqueda = queryStringObj.get("busqueda");
 
let titulo = document.querySelector(".productosaleatorios");
 
if (!queryStringObj.has("busqueda") || busqueda === "") {
    titulo.innerText = "El campo de búsqueda no puede estar vacío.";
} else if (busqueda.length < 3) {
    titulo.innerText = "La búsqueda debe tener al menos 3 caracteres.";
} else {
    titulo.innerText = `Resultados de búsqueda para "${busqueda}"`;
}
 
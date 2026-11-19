window.addEventListener("load", function () {
    let titulo = document.querySelector(".titulobusqueda");
    let contenedor = document.querySelector(".resultados");
    let query = new URLSearchParams(location.search);
    let busqueda = query.get("busqueda");

    titulo.innerText = `Resultados de búsqueda para: ${busqueda}`;

    fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.products.length === 0) {
                titulo.innerText = `No hay resultados para el término: ${busqueda}`;
            } else {
                let tarjetas = "";
                for (let i = 0; i < data.products.length; i++) {
                    tarjetas += `
                     <article class="articuloproducto">
                         <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                         <h3>${data.products[i].title}</h3>
                         <p class="crema">${data.products[i].description}</p>
                         <p class="precio">$${data.products[i].price}</p>
                         <a href="product.html?id=${data.products[i].id}" class="verdetalle"> Ver detalle </a>
                    </article>`;
                }
                contenedor.innerHTML += tarjetas;
            }
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
});
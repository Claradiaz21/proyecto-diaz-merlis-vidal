window.addEventListener("load", function () {

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let categoria = queryStringObj.get("categoria");

    let titulo = document.querySelector(".titulocategoria");
    let productos = document.querySelector(".productoscategoria");

    titulo.innerText = categoria;

    fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let tarjetas = "";

            for (let i = 0; i < data.products.length; i++) {
                tarjetas += `
                    <article class="articuloproducto">
                        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                        <h3>${data.products[i].title}</h3>
                        <p class="crema">${data.products[i].description}</p>
                        <p class="precio">$${data.products[i].price}</p>
                        <a href="./product.html?id=${data.products[i].id}" class="verdetalle"> Ver detalle </a>
                    </article>`;
            }

            productos.innerHTML += tarjetas;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });

});
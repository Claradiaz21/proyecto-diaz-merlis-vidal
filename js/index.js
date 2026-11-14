window.addEventListener("load", function () {
    let smartphones = document.querySelector(".smartphones");
    fetch('https://dummyjson.com/products/category/smartphones')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for(let i = 0; i < data.products.length; i++) {
            smartphones.innerHTML += `
            <article class="articuloproducto">
            <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
            <h3>${data.products[i].title}</h3>
            <p class="crema">${data.products[i].description}</p>
            <p class="precio">$${data.products[i].price}</p>
            <a href="product.html?id=${data.products[i].id}" class="verdetalle"> Ver detalle </a>
            </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
    let groceries = document.querySelector(".groceries");
    fetch('https://dummyjson.com/products/category/groceries')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.products.length; i++) {
            groceries.innerHTML += `
            <article class="articuloproducto">
            <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
            <h3>${data.products[i].title}</h3>
            <p class="crema">${data.products[i].description}</p>
            <p class="precio">$${data.products[i].price}</p>
            <a href="product.html?id=${data.products[i].id}" class="verdetalle"> Ver detalle </a>
            </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
});


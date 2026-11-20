window.addEventListener('load', function () {

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let id = queryStringObj.get("id");

    let imagen = document.querySelector(".detalleimagen");
    let nombre = document.querySelector(".nombreproducto");
    let precio = document.querySelector(".precioproducto");
    let marca = document.querySelector(".marca");
    let descripcion = document.querySelector(".descripcionproducto");
    let stock = document.querySelector(".stockproducto");
    let categoria = document.querySelector(".categoriaproducto");
    let tags = document.querySelector(".tags");
    let listaReviews = document.querySelector(".resenas");

    fetch(`https://dummyjson.com/products/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            imagen.innerHTML = `<img src="${data.thumbnail}" alt="${data.title}">`;
            nombre.innerText = data.title;
            precio.innerText = "$" + data.price;
            descripcion.innerText = data.description;
            stock.innerText = "Stock: " + data.stock + " unidades";
            categoria.innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}">${data.category}</a>`;

            if (data.brand == undefined) {
                marca.innerText = "Marca: sin marca";
            } else {
                marca.innerText = "Marca: " + data.brand;
            }

            let textoTags = "";
            for (let i = 0; i < data.tags.length; i++) {
                if (i < 3) {
                    textoTags += "#" + data.tags[i] + " ";
                }
            }
            tags.innerText = textoTags;

            let textoReviews = "";
            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i];

                textoReviews += `
                    <li class="itemresena">
                        <p class="usuario">Usuario: ${review.reviewerName}</p>
                        <p>Rating: ${review.rating}/5</p>
                        <p>Fecha: ${review.date}</p>
                        <p>${review.comment}</p>
                    </li>
                `;
            }
            listaReviews.innerHTML = textoReviews;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });

});
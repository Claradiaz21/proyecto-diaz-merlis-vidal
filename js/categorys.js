let listaCategorias = document.querySelector(".listacategorias");

window.addEventListener("load", function () {

    fetch("https://dummyjson.com/products/categories")
        .then(function (response) {
            return response.json();
        })
        .then(function (informacion) {
            console.log(informacion);

            let categorias = "";

            for (let i = 0; i < informacion.length; i++) {
                let categoria = informacion[i];

                categorias += `
            <li class="centro">
            <a href="./category.html?categoria=${categoria.slug}"> ${categoria.name} </a>
            </li>
            `;
            }

            listaCategorias.innerHTML = categorias;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });

});
let listaCategorias = document.querySelector(".listacategorias");

window.addEventListener("load", function () {

    fetch("https://dummyjson.com/products/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (informacion) {
        console.log(informacion);

        for (let i = 0; i < informacion.length; i++) {
            let categoria = informacion[i];

            listaCategorias.innerHTML += `
            <li class="centro">
            <a href="./category.html?categoria=${categoria.slug}"> ${categoria.name} </a>
            </li>
            `;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

});
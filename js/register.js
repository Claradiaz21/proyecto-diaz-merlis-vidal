window.addEventListener('load', function () {

    let formulario = document.querySelector(".padree");
    let email = document.querySelector("#mail");
    let pass = document.querySelector("#pass");
    let pass2 = document.querySelector("#pass2");

    let errorEmail = document.querySelector(".erroremail");
    let errorPass = document.querySelector(".errorpass");
    let errorPass2 = document.querySelector(".errorpass2");

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        let hayErrores = false;

        errorEmail.innerText = "";
        errorPass.innerText = "";
        errorPass2.innerText = "";

        if (email.value == "") {
            errorEmail.innerText = "El email es obligatorio";
            hayErrores = true;
        }

        if (pass.value == "") {
            errorPass.innerText = "La contraseña es obligatoria";
            hayErrores = true;
        } else if (pass.value.length < 6) {
            errorPass.innerText = "La contraseña debe tener al menos 6 caracteres";
            hayErrores = true;
        }

        if (pass.value != pass2.value) {
            errorPass2.innerText = "Las contraseñas no coinciden";
            hayErrores = true;
        }

        if (hayErrores == false) {
            this.submit();
        }
    });

});
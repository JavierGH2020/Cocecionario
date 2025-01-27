document.getElementById("Borrar").addEventListener("click", resetForm);
document.getElementById("Enviar").addEventListener("click", validateForm);

function resetForm(ev) {
    ev.preventDefault();
    let answer = confirm("¿Está seguro de que quiere borrar los datos?");
    if (answer) {
        document.getElementById("form-user").reset();
    }
}

function validateForm(ev) {
    ev.preventDefault();
    let listE = checkFields();
    if (listE.length === 0) {
        saveLocalStorage();
        document.getElementById("form-user").submit();
    } else {
        let error = document.getElementById("errorMessage");
        error.innerHTML = "";
        listE.forEach(err => { 
            error.innerHTML += "<p><b>" + err + "</b></p>";
        });
    }
}

function checkFields() {
    let listError = [];
    let first = document.getElementById("input-first");
    if (first.value.length < 2 || first.value.length > 15) {
        listError.push("El nombre debe tener entre 2 y 15 caracteres.");
    }

    let password = document.getElementById("input-password");
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w])\S{8,}$/.test(password.value))) {
        listError.push("La contraseña debe contener al menos un número, una letra mayúscula, una minúscula y un carácter especial.");
    }

    let email = document.getElementById("input-email");
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        listError.push("El Email no es válido.");
    }

    return listError;
}

function saveLocalStorage() {
    const formData = {
        usuario: document.getElementById("input-first").value,
        contraseña: document.getElementById("input-password").value,
        telefono: document.getElementById("telefono").value,
        precio: document.querySelector('input[name="precio"]:checked')?.value || "",
        servicio: document.querySelector('input[name="servicio"]:checked')?.value || "",
        fecha_inicio: document.getElementById("fecha_inicio").value,
        fecha_fin: document.getElementById("fecha_fin").value,
        nombre: document.getElementById("name").value,
        sexo: document.querySelector('input[name="Sexo"]:checked')?.value || "",
        nacionalidad: document.getElementById("nacionalidad").value,
        email: document.getElementById("input-email").value,
        comentarios: document.getElementById("comentarios").value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("¡Datos guardados correctamente en el almacenamiento local!");
}

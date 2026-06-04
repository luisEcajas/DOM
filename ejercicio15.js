// Selección de elementos del DOM
let checkHtml = document.getElementById('html5');
let checkCss = document.getElementById('css');
let checkCoffee = document.getElementById('coffee');
let botonSubmit = document.getElementById('btnSubmit');
let txtMensaje = document.getElementById('mensaje');

function evaluarSolicitud() {
    // Verificamos si los tres checkboxes están en estado true simultáneamente
    if (checkHtml.checked && checkCss.checked && checkCoffee.checked) {
        txtMensaje.textContent = "¡Estás contratado! Necesitamos renovar nuestra página web. Debe estar lista para la medianoche del sábado. Lanzamos el sitio el domingo.";
    } else {
        // Opción limpia por si desmarcan alguna casilla después de enviar
        txtMensaje.textContent = "Application pending. We require all implementation and coffee skills.";
    }
}

// Asignación del evento click
botonSubmit.addEventListener('click', evaluarSolicitud);
// Selección de elementos esenciales del DOM
let tableroComentarios = document.getElementById('tableroComentarios');
let selectResidencia = document.getElementById('selectResidencia');
let txtComentario = document.getElementById('txtComentario');
let botonAnadir = document.getElementById('btnAnadir');

function publicarComentario() {
    // Extracción de los valores textuales de los controles
    let residencia = selectResidencia.value;
    let mensaje = txtComentario.value;

    // Validación básica para evitar publicaciones en blanco
    if (mensaje.trim() === "") {
        alert("Por favor, escriba un comentario antes de añadir.");
        return;
    }

    // Estructuración del nuevo bloque en formato HTML plano
    let nuevoBloqueHTML = "<div class='comentario-item'>" +
                            "<strong>" + residencia + ":</strong><br>" +
                            mensaje +
                          "</div>";

    // Acumulación directa dentro del contenedor superior (mantiene los anteriores)
    tableroComentarios.innerHTML = tableroComentarios.innerHTML + nuevoBloqueHTML;

    // Limpieza de cortesía del campo de texto para permitir una nueva escritura
    txtComentario.value = "";
}

// Vinculación del escuchador de eventos al botón
botonAnadir.addEventListener('click', publicarComentario);
// Seleccionamos todas las imágenes de la galería
let imagenes = document.getElementsByClassName('tarjeta-animal');

// Recorremos los elementos con un ciclo estándar para asignar el evento
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', traerAlFrente);
}

function traerAlFrente(event) {
    // 1. Reiniciar el zIndex (Corregido a camelCase)
    for (let j = 0; j < imagenes.length; j++) {
        imagenes[j].style.zIndex = "1";
    }
    
    // 2. Asignar un zIndex alto a la imagen cliqueada (Corregido a camelCase)
    let imagenSeleccionada = event.target;
    imagenSeleccionada.style.zIndex = "10";
}
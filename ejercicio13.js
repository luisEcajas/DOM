// Selección del elemento de imagen en el DOM por su ID
let miImagen = document.getElementById('imagenInteractiva');

// Definimos tus rutas reales de la carpeta img
let rutaOriginal = "img/img33.jpg"; // El carpincho
let rutaSegunda = "img/img44.jpg";  // El gato programador

// Función para cambiar a la segunda imagen al entrar el cursor
function mostrarSegundaImagen() {
    miImagen.src = rutaSegunda;
}

// Función para restaurar la imagen original al retirar el cursor
function restaurarImagenOriginal() {
    miImagen.src = rutaOriginal;
}

// Asignación de eventos de mouse al elemento
miImagen.addEventListener('mouseenter', mostrarSegundaImagen);
miImagen.addEventListener('mouseleave', restaurarImagenOriginal);
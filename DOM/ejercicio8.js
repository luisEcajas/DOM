// ejercicio8.js
const boton = document.getElementById('btnCambiar');
const imagen = document.getElementById('imgAleatoria');

// Lista de archivos de imagen
// ejercicio8.js
const listaImagenes = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg"
];

boton.addEventListener('click', () => {
    // 1. Generamos un índice aleatorio entre 0 y la longitud del arreglo
    const indiceAleatorio = Math.floor(Math.random() * listaImagenes.length);
    
    // 2. Cambiamos el atributo 'src' de la etiqueta img
    imagen.src = listaImagenes[indiceAleatorio];
});
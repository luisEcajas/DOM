// Script.js

// 1. Seleccionamos los elementos del DOM
const botonRojo = document.getElementById('btnRojo');
const botonAzul = document.getElementById('btnAzul');
const botonVerde = document.getElementById('btnVerde');

// 2. Definimos las funciones para cambiar el color
botonRojo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

botonAzul.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

botonVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});


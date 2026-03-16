// ejercicio7.js
const texto = document.getElementById('textoIntercalado');

// Variable para controlar el estado del color
let esRojo = true;

// setInterval ejecuta una función cada X milisegundos (1000ms = 1 segundo)
setInterval(() => {
    if (esRojo) {
        texto.style.color = 'blue';
        esRojo = false; // Cambiamos el estado para la próxima vuelta
    } else {
        texto.style.color = 'red';
        esRojo = true; // Volvemos al estado inicial
    }
}, 1000);
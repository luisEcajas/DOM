// ejercicio9.js
const cuadrado = document.getElementById('cuadrado');
const colorInicial = 'blue';

// Función para generar colores aleatorios en formato HEX
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 1. Cambiar color al pasar el mouse
cuadrado.addEventListener('mouseover', () => {
    cuadrado.style.backgroundColor = generarColorAleatorio();
});

// 2. Volver al color inicial con doble clic
cuadrado.addEventListener('dblclick', () => {
    cuadrado.style.backgroundColor = colorInicial;
});
// ejercicio6.js
const boton = document.getElementById('btnTransformar');
const texto = document.getElementById('textoAModificar');

boton.addEventListener('click', () => {
    // 1. Cambiamos el color a azul
    texto.style.color = 'blue';

    // 2. Cambiamos la alineación al centro
    texto.style.textAlign = 'center';

    // Opcional: Podemos cambiar el peso de la fuente para que se note más
    texto.style.fontWeight = 'bold';
});
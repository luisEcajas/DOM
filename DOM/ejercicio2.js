// ejercicio2.js

const boton = document.getElementById('btnConvertir');
const input = document.getElementById('inputDolares');
const displayResultado = document.getElementById('resultado');

// Definimos la tasa de cambio (puedes ajustarla a la actual)
const TRM = 4000; 

boton.addEventListener('click', () => {
    // 1. Obtenemos el valor del input
    let dolares = parseFloat(input.value);

    // 2. Validamos que el usuario haya ingresado un número
    if (isNaN(dolares) || dolares <= 0) {
        alert("Por favor, ingresa una cantidad válida de dólares.");
        return;
    }

    // 3. Realizamos la operación
    let pesos = dolares * TRM;

    // 4. Mostramos el resultado formateado
    displayResultado.textContent = pesos.toLocaleString('es-CO');
});
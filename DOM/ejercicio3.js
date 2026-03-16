// ejercicio3.js
const btn = document.getElementById('btnConvertirTemp');

btn.addEventListener('click', () => {
    const valor = parseFloat(document.getElementById('valorTemp').value);
    const origen = document.getElementById('escalaOrigen').value;
    const destino = document.getElementById('escalaDestino').value;
    const display = document.getElementById('resultadoTemp');

    if (isNaN(valor)) {
        display.textContent = "Por favor, ingresa un número.";
        return;
    }

    // 1. Convertir cualquier entrada a Celsius (Unidad Base)
    let celsius;
    if (origen === "C") {
        celsius = valor;
    } else if (origen === "F") {
        celsius = (valor - 32) * 5 / 9;
    } else if (origen === "K") {
        celsius = valor - 273.15;
    }

    // 2. Convertir de Celsius al destino final
    let resultado;
    if (destino === "C") {
        resultado = celsius;
    } else if (destino === "F") {
        resultado = (celsius * 9 / 5) + 32;
    } else if (destino === "K") {
        resultado = celsius + 273.15;
    }

    display.textContent = `Resultado: ${resultado.toFixed(2)} °${destino}`;
});
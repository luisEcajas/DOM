// ejercicio4.js
const boton = document.getElementById('btnCalcularArea');

boton.addEventListener('click', () => {
    // 1. Capturamos los valores de los inputs
    const base = parseFloat(document.getElementById('baseTriangulo').value);
    const altura = parseFloat(document.getElementById('alturaTriangulo').value);
    const display = document.getElementById('resultadoArea');

    // 2. Validación básica para evitar valores vacíos o negativos
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        display.textContent = "Por favor, ingresa valores válidos mayores a 0.";
        display.style.color = "red";
        return;
    }

    // 3. Aplicamos la fórmula
    const area = (base * altura) / 2;

    // 4. Mostramos el resultado
    display.style.color = "black";
    display.textContent = `Área: ${area.toFixed(2)} cm²`;
});
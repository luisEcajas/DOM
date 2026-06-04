// Selección de componentes
let inputA = document.getElementById('valA');
let inputB = document.getElementById('valB');
let inputC = document.getElementById('valC');
let boton = document.getElementById('btnCalcular');
let txtResultado = document.getElementById('resultado');

function calcularRaices() {
    // Conversión a enteros
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    let c = parseInt(inputC.value);

    // 1. Validar que los campos no estén vacíos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        txtResultado.textContent = "Error: Por favor ingresa todos los coeficientes.";
        return;
    }

    // 2. Validar que 'a' no sea cero
    if (a === 0) {
        txtResultado.textContent = "Error: El coeficiente 'a' no puede ser cero.";
        return;
    }

    // 3. Validar rangos entre -99 y +99
    if (a < -99 || a > 99 || b < -99 || b > 99 || c < -99 || c > 99) {
        txtResultado.textContent = "Error: Los números deben estar entre -99 y +99.";
        return;
    }

    // 4. Calcular el discriminante (b^2 - 4ac)
    let discriminante = (b * b) - (4 * a * c);

    // 5. Evaluar la naturaleza de las raíces
    if (discriminante < 0) {
        txtResultado.textContent = "Solution: No existen raíces reales (números imaginarios).";
    } else if (discriminante === 0) {
        // Una única raíz real
        let x = -b / (2 * a);
        txtResultado.textContent = "Solution: x = " + x.toFixed(3);
    } else {
        // Dos raíces reales distintas
        let x1 = (-b - Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b + Math.sqrt(discriminante)) / (2 * a);
        
        // Formatear la salida para que coincida exactamente con la imagen de referencia
        txtResultado.textContent = "Solution: x = " + x1.toFixed(3) + ", x = " + x2.toFixed(3);
    }
}

// Escuchador de eventos
boton.addEventListener('click', calcularRaices);
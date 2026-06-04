//elementos del DOM
let inputNum1 = document.getElementById('numero1');
let inputNum2 = document.getElementById('numero2');
let selectOperacion = document.getElementById('operacion');
let botonCalcular = document.getElementById('btnCalcular');
let txtResultado = document.getElementById('resultado');


function calcular() {
    
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    let operacion = selectOperacion.value;
    let resultadoFinal = 0;

   
    if (isNaN(num1) || isNaN(num2)) {
        txtResultado.textContent = "Error: Ingrese ambos números";
        return;
    }

    
    if (operacion === "suma") {
        resultadoFinal = num1 + num2;
    } 
    else if (operacion === "resta") {
        resultadoFinal = num1 - num2;
    } 
    else if (operacion === "multiplicacion") {
        resultadoFinal = num1 * num2;
    } 
    else if (operacion === "division") {
        // Validación específica para evitar la división por cero
        if (num2 === 0) {
            txtResultado.textContent = "Error: División por cero";
            return;
        }
        resultadoFinal = num1 / num2;
    }

    
    txtResultado.textContent = resultadoFinal;
}


botonCalcular.addEventListener('click', calcular);
// Selección de elementos del DOM
let inputDeposito = document.getElementById('deposito');
let inputTasa = document.getElementById('tasa');
let inputAnios = document.getElementById('anios');
let botonCalcular = document.getElementById('btnCalcular');
let tablaResultados = document.getElementById('tablaResultados');

function calcularInteresCompuesto() {
    // Limpiar cualquier resultado de ejecuciones previas
    tablaResultados.textContent = "";

    // Conversión de entradas a datos numéricos procesables
    let saldoInicial = parseFloat(inputDeposito.value);
    let tasaAnual = parseFloat(inputTasa.value);
    let totalAnios = parseInt(inputAnios.value);

    // Validación de campos vacíos o inconsistentes
    if (isNaN(saldoInicial) || isNaN(tasaAnual) || isNaN(totalAnios)) {
        alert("Por favor, ingrese todos los valores numéricos.");
        return;
    }

    // Convertimos el porcentaje a valor decimal (ej: 10% -> 0.10)
    let factorInteres = tasaAnual / 100;

    // Bucle para iterar año por año según el límite definido por el usuario
    for (let i = 1; i <= totalAnios; i++) {
        // Cálculo matemático del periodo actual
        let interesGanado = saldoInicial * factorInteres;
        let saldoFinal = saldoInicial + interesGanado;

        // Creación dinámica de componentes de la fila
        let fila = document.createElement('tr');

        let celdaAnio = document.createElement('td');
        let celdaInicio = document.createElement('td');
        let celdaInteres = document.createElement('td');
        let celdaFinal = document.createElement('td');

        // Asignación de datos formateados con dos decimales fijos ($0.00)
        celdaAnio.textContent = i;
        celdaInicio.textContent = "$" + saldoInicial.toFixed(2);
        celdaInteres.textContent = "$" + interesGanado.toFixed(2);
        celdaFinal.textContent = "$" + saldoFinal.toFixed(2);

        // Estructuración del árbol de nodos de la fila
        fila.appendChild(celdaAnio);
        fila.appendChild(celdaInicio);
        fila.appendChild(celdaInteres);
        fila.appendChild(celdaFinal);

        // Inserción en el cuerpo de la tabla
        tablaResultados.appendChild(fila);

        // Actualización crucial: El valor final actual se convierte en el inicial del próximo año
        saldoInicial = saldoFinal;
    }
}

// Vinculación del manejador de eventos
botonCalcular.addEventListener('click', calcularInteresCompuesto);
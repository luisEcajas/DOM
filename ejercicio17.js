// Selección de elementos del DOM
let botonAgregar = document.getElementById('btnAgregar');
let cuerpoTabla = document.getElementById('cuerpoTabla');

// Contador para simular datos dinámicos en la primera columna
let contadorFilas = 1;

function insertarFila() {
    // 1. Crear el elemento de la fila (tr)
    let nuevaFila = document.createElement('tr');

    // 2. Crear las celdas individuales (td)
    let celdaId = document.createElement('td');
    let celdaDescripcion = document.createElement('td');
    let celdaEstado = document.createElement('td');

    // 3. Asignar el contenido de texto a cada celda
    celdaId.textContent = contadorFilas;
    celdaDescripcion.textContent = "Ítem o Registro N° " + contadorFilas;
    celdaEstado.textContent = "Activo";

    // 4. Añadir las celdas dentro de la fila contenedora
    nuevaFila.appendChild(celdaId);
    nuevaFila.appendChild(celdaDescripcion);
    nuevaFila.appendChild(celdaEstado);

    // 5. Insertar la fila completa dentro del tbody de la tabla
    cuerpoTabla.appendChild(nuevaFila);

    // 6. Incrementar el contador para la siguiente inserción
    contadorFilas = contadorFilas + 1;
}

// Vincular el evento click al botón
botonAgregar.addEventListener('click', insertarFila);
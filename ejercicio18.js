// Selección de elementos del DOM
let botonMover = document.getElementById('btnMover');
let botonReset = document.getElementById('btnReset');
let cuadro = document.getElementById('miCuadro');

function desplazarDerecha() {
    // Cambiamos la propiedad 'left' para que se mueva al extremo derecho.
    // Usamos 'calc' de CSS para restar el tamaño del propio cuadro y que no se salga de la pantalla.
    cuadro.style.left = "calc(100% - 100px)";
}

function desplazarIzquierda() {
    // Restauramos la posición inicial a la izquierda
    cuadro.style.left = "0px";
}

// Asignación de eventos de click a los botones
botonMover.addEventListener('click', desplazarDerecha);
botonReset.addEventListener('click', desplazarIzquierda);
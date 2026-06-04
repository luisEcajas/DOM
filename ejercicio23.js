// Selección de componentes del DOM
var inputNumero = document.getElementById('numUsuario');
var botonAdivinar = document.getElementById('btnAdivinar');
var pantallaMensaje = document.getElementById('pantallaMensaje');

// Variables globales de control de estado del juego
var numeroSecreto = 3; // Número fijo a adivinar entre 0 y 5
var intentosRestantes = 3; // Límite inicial de oportunidades

function procesarIntento() {
    // Extracción y conversión del valor del input
    var intentoUsuario = parseInt(inputNumero.value);

    // Validación elemental de rangos numéricos permitidos
    if (isNaN(intentoUsuario) || intentoUsuario < 0 || intentoUsuario > 5) {
        pantallaMensaje.textContent = "Error: Ingresa un número de 0 a 5.";
        return;
    }

    // Escenario 1: El usuario acierta el número secreto
    if (intentoUsuario === numeroSecreto) {
        pantallaMensaje.textContent = "¡Ganaste! Acertaste el número secreto.";
        botonAdivinar.disabled = true; // Bloquea el botón al finalizar
        return;
    }

    // Si no acertó, se descuenta una oportunidad de inmediato
    intentosRestantes = intentosRestantes - 1;

    // Escenario 2: Se agotan los intentos (Derrota definitiva)
    if (intentosRestantes === 0) {
        pantallaMensaje.textContent = "Perdiste el juego. El número era el " + numeroSecreto + ".";
        botonAdivinar.disabled = true; // Bloquea interacciones adicionales
        return;
    }

    // Escenario 3: Falló el número pero conserva oportunidades pendientes
    pantallaMensaje.textContent = "Fallaste el número. Te quedan " + intentosRestantes + " intentos.";
    inputNumero.value = ""; // Limpia el campo para facilitar el siguiente reintento
}

// Vinculación del manejador de eventos al botón principal
botonAdivinar.addEventListener('click', procesarIntento);
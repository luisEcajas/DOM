// Selección de elementos del DOM
let inputEmail = document.getElementById('emailField');
let mensajeError = document.getElementById('errorMessage');

// Expresión regular estándar para validar la estructura de un correo electrónico
let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function validarCorreo() {
    let valor = inputEmail.value;

    // Si el campo está vacío, restauramos el estado visual inicial sin errores
    if (valor === "") {
        inputEmail.className = "campo-email";
        mensajeError.style.display = "none";
        return;
    }

    // Evaluamos el texto con la expresión regular
    if (patronEmail.test(valor)) {
        // Estado Válido: Borde azul, oculta texto de error
        inputEmail.className = "campo-email input-valido";
        mensajeError.style.display = "none";
    } else {
        // Estado Incorrecto: Borde rojo, muestra texto de error
        inputEmail.className = "campo-email input-error";
        mensajeError.style.display = "block";
    }
}

// Escuchador de eventos: 'input' ejecuta la validación en tiempo real en cada pulsación
inputEmail.addEventListener('input', validarCorreo);
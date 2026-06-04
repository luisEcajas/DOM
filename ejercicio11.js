// Selección de elementos del DOM
let inputNombre = document.getElementById('firstName');
let inputApellido = document.getElementById('lastName');
let boton = document.getElementById('btnGenerar');
let contenedorResultado = document.getElementById('resultado');

// Función para procesar y generar el correo
function generarEmail() {
    // Obtenemos los valores de los inputs
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    
    
    if (nombre === "" || apellido === "") {
        alert("Por favor, complete ambos campos.");
        return; 
    }
    
    let correoGenerado = nombre + "." + apellido + "@park.edu";
    
   
    contenedorResultado.textContent = correoGenerado;
    
  
    inputNombre.value = "";
    inputApellido.value = "";
}

// Asignamos el evento click al botón
boton.addEventListener('click', generarEmail);
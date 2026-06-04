// Seleccionamos el elemento del DOM
let globo = document.getElementById('globo');


let tamanoActual = 20; 


let tamanoMaximo = 80;

// Funcion que maneja el inflado y desinflado
function manejarTeclado(event) {
    if (event.key === "ArrowUp") {
        // Previene el comportamiento por defecto de la pagina 
        event.preventDefault(); 
        
        // Inflar un 10% (multiplicar por 1.1)
        tamanoActual = tamanoActual * 1.1;
        
        // Verificar si supera el limite para explotar
        if (tamanoActual > tamanoMaximo) {
            globo.textContent = "💥"; // Cambia el emoji
            
            window.removeEventListener('keydown', manejarTeclado);
        } else {
           
            globo.style.fontSize = tamanoActual + "px";
        }
    } 
    else if (event.key === "ArrowDown") {
        // Previene el comportamiento por defecto (hacer scroll hacia abajo)
        event.preventDefault(); 
        
        // Desinflar un 10% (multiplicar por 0.9)
        tamanoActual = tamanoActual * 0.9;
        
        // Evitamos que el tamaño se vuelva excesivamente pequeño o negativo
        if (tamanoActual < 10) {
            tamanoActual = 10;
        }
        
        
        globo.style.fontSize = tamanoActual + "px";
    }
}

// Registramos el evento de escucha en la ventana del navegador
window.addEventListener('keydown', manejarTeclado);
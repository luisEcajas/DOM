let p1 = document.getElementById('punto1');
let p2 = document.getElementById('punto2');
let p3 = document.getElementById('punto3');

// Escuchamos el movimiento del mouse en la ventana
window.addEventListener('mousemove', function(event) {
    // El punto 1 sigue inmediatamente al mouse
    p1.style.left = event.clientX + "px";
    p1.style.top = event.clientY + "px";

    // Retraso controlado de 50ms para el segundo elemento
    setTimeout(function() {
        p2.style.left = event.clientX + "px";
        p2.style.top = event.clientY + "px";
    }, 50);

    // Retraso controlado de 100ms para el tercer elemento
    setTimeout(function() {
        p3.style.left = event.clientX + "px";
        p3.style.top = event.clientY + "px";
    }, 100);
});
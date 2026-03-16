// ejercicio5.js
const boton = document.getElementById('btnCrear');
const contenedor = document.getElementById('contenedorPrincipal');

boton.addEventListener('click', () => {
    // 1. Crear el nuevo elemento div
    const nuevoDiv = document.createElement('div');

    // 2. Asignar el texto solicitado
    nuevoDiv.textContent = "Hola mundo";

    // 3. Aplicar los estilos requeridos
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.style.color = 'white';
    nuevoDiv.style.textAlign = 'center';
    
    // Un poco de diseño extra para que no se vean pegados
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.margin = '5px 0';
    nuevoDiv.style.borderRadius = '5px';

    // 4. Agregar el nuevo div al contenedor en el HTML
    contenedor.appendChild(nuevoDiv);
});
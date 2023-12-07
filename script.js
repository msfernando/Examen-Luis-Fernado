document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('menu');

    mobileMenuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    function updateTime() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        const formattedTime = `${hours}:${minutes}:${seconds}`;
        document.getElementById('current-time').textContent = formattedTime;
    }

    setInterval(updateTime, 1000);

    document.getElementById('search-button').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input').value;
        alert(`Realizar búsqueda con término: ${searchTerm}`);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const clickButton1 = document.getElementById('clickButton1');
    const clickCount1 = document.getElementById('count');

    // Inicializar contador
    let counter = 0;

    // Agregar evento de clic al botón
    clickButton1.addEventListener('click', function () {
        // Incrementar el contador
        counter++;

        // Actualizar el texto del contador
        clickCount1.textContent = counter;
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const miMain = document.getElementById('miMain');
    // Cambiar el ancho del main dinámicamente
    miMain.style.width = '600px';
});







// script.js
document.getElementById('verMasBtn').addEventListener('click', function() {
    const informacionAdicional = document.getElementById('informacionAdicional');
    informacionAdicional.classList.toggle('hidden');
});
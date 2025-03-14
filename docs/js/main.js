document.addEventListener('DOMContentLoaded', function() {
    // Manejar el botón de pre-registro
    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu interés! Serás redirigido a Google Play para pre-registrarte.');
        window.location.href = 'https://play.google.com/store';
    });

    // Agregar animaciones de desplazamiento suave
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Código adicional para futuras funcionalidades
    console.log('Página cargada y lista.');
});
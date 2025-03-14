document.addEventListener('DOMContentLoaded', function() {
    // Manejar el botón de pre-registro
    const downloadButton = document.querySelector('.download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert('¡Gracias por tu interés! Serás redirigido a Google Play para pre-registrarte.');
            window.location.href = 'https://play.google.com/store';
        });
    }

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

    // Carrusel de imágenes
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselTrack = document.querySelector('.carousel-track');
    let currentIndex = 0;

    if (prevButton && nextButton && carouselTrack) {
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < carouselTrack.children.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    function updateCarousel() {
        const slideWidth = carouselTrack.children[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`;
    }

    window.showPreRegisterMessage = function(platform) {
        alert('Preregistro en ' + platform + ' próximamente disponible.');
    }

    // Código adicional para futuras funcionalidades
    console.log('Página cargada y lista.');
});
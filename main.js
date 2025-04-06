
    // Función para revelar elementos al hacer scroll
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        } else {
          reveal.classList.remove('active');
        }
      });
    }

    // Event listeners
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', () => {
      // Iniciar animaciones al cargar la página
      revealOnScroll();

      // Mejorar la accesibilidad de las imágenes
      const mainImage = document.getElementById('image');
      if (mainImage) {
        mainImage.addEventListener('error', function () {
          this.src = 'img/placeholder.jpg';
          this.alt = 'Imagen no disponible de Jorge Sierra';
        });
      }

      // Registrar analytics (ejemplo)
      console.log('Página cargada correctamente');
    });

    // Lazy loading para otros elementos si fuera necesario
    document.addEventListener('DOMContentLoaded', () => {
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => {
          img.removeAttribute('data-src');
        };
      });
    });

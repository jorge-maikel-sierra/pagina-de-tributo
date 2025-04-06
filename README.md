# Frontend Mentor - Página de tributo a Jorge Sierra

Esta es mi solución para la página de tributo a Jorge Sierra, un desarrollador front-end con experiencia en JavaScript y PHP que ha superado múltiples desafíos profesionales y personales.

## Tabla de contenidos

- [Resumen](#resumen)
  - [El reto](#el-reto)
  - [Capturas de pantalla](#capturas-de-pantalla)
  - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Recursos útiles](#recursos-útiles)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

## Resumen

### El reto

Crear una página de tributo que:

- Muestre información relevante sobre Jorge Sierra
- Presente una línea de tiempo con los eventos importantes de su vida
- Sea totalmente responsiva para diferentes tamaños de pantalla
- Incluya elementos visuales atractivos y bien estructurados
- Implemente las mejores prácticas de HTML, CSS (Tailwind) y JavaScript

### Capturas de pantalla

![Vista previa del diseño en escritorio](./img/jorgesierra.png)

*Vista principal de la página de tributo mostrando la imagen y línea de tiempo de Jorge Sierra*

### Enlaces

- [Repositorio del proyecto](https://github.com/jorge-maikel-sierra/pagina-de-tributo)
- [Sitio en vivo](https://jorge-maikel-sierra.github.io/pagina-de-tributo/)

## Mi proceso

### Construido con

- HTML5 semántico
- Tailwind CSS
- JavaScript para efectos interactivos
- Principio de diseño "Mobile-first"
- CSS personalizado para elementos específicos
- Animaciones al hacer scroll

### Lo que aprendí

Durante este proyecto, desarrollé varias habilidades importantes:

#### Estructura HTML semántica

Implementé una estructura HTML5 semántica para mejorar la accesibilidad y SEO:

```html
<header class="bg-primary text-white py-4 shadow-md">
    <div class="container mx-auto">
        <h1 class="lg:text-5xl text-2xl font-bold mb-0 md:leading-tight p-2">Jorge Sierra</h1>
        <p class="text-xl text-slate-200">Developer Front-end</p>
    </div>
</header>
```

#### Estilizado con Tailwind CSS

Aprendí a utilizar eficientemente las clases de utilidad de Tailwind para un desarrollo más rápido:

```html
<figure id="img-div" class="bg-white p-5 m-0 rounded-3xl shadow-inner reveal">
    <div class="overflow-hidden rounded-xl">
        <img id="image" class="w-full max-w-md block h-auto my-0 mx-auto transition-transform duration-500 hover:scale-105" 
             src="img/jorgesierra.jpg" 
             alt="Jorge Sierra, desarrollador front-end"
             loading="lazy">
    </div>
</figure>
```

#### Efectos de animación con JavaScript

Implementé efectos de revelación al hacer scroll para mejorar la experiencia de usuario:

```javascript
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
```

#### Línea de tiempo visualmente atractiva

Creé un componente de línea de tiempo personalizado con CSS:

```css
.timeline-item {
    position: relative;
    padding-left: 28px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #1e40af;
}

.timeline-item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 18px;
    bottom: -4px;
    width: 2px;
    background-color: #cbd5e1;
}
```

### Desarrollo continuo

En mis futuros proyectos, quiero seguir profundizando en:

- Animaciones más avanzadas con CSS y JavaScript
- Implementación de accesibilidad según WCAG 2.1
- Optimización de rendimiento para conseguir mejores puntuaciones en Lighthouse
- Explorar más componentes personalizados con Tailwind CSS

### Recursos útiles

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Me ayudó a implementar eficientemente estilos responsivos.
- [MDN Web Docs](https://developer.mozilla.org/es/) - Referencia fundamental para HTML, CSS y JavaScript.
- [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Guía completa sobre Flexbox que me ayudó con el layout.

## Autor

- GitHub - [@jorge-maikel-sierra](https://github.com/jorge-maikel-sierra)
- Frontend Mentor - [@jorge-maikel-sierra](https://www.frontendmentor.io/profile/jorge-maikel-sierra)
- Twitter - [@Jorge_Sierra_1](https://x.com/Jorge_Sierra_1)

## Agradecimientos

Quiero expresar mi agradecimiento a todos los que me han apoyado durante este proyecto, especialmente a mi mentor que me ha guiado a través del proceso de aprendizaje de desarrollo web. También agradezco a la comunidad de desarrolladores que comparte su conocimiento libremente.
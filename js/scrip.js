
/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.carousel-inner, .h2galeria, .h2eventos, .logo-eventos, .formulario', { origin: 'left' });
ScrollReveal().reveal('.gallery-item, .h4-eventos, .linkgaleria', { origin: 'bottom' });
ScrollReveal().reveal('.cards, .about-img', { origin: 'top' });
ScrollReveal().reveal('.parrafo-eventos', { origin: 'right' });



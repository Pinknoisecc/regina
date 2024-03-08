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

/*CARTA DIGITAL*/
function filterCategory(category) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';

    const filteredItems = menu.find(item => item.category === category).items;

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        `;
        menuContainer.appendChild(itemDiv);
        setTimeout(() => {
            itemDiv.classList.add('active');
        }, 10);
    });
}

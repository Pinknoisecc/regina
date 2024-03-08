document.addEventListener('DOMContentLoaded', function () {
    const storedCategory = localStorage.getItem('selectedCategory');

    filterCategory(storedCategory || 'pastas');
});

function toggleCategories() {
    const menuCategories = document.getElementById('menuCategories');
    menuCategories.style.display = (menuCategories.style.display === 'block') ? 'none' : 'block';
}

function filterCategory(category) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';

    const storedMenu = localStorage.getItem('menu');
    const menu = storedMenu ? JSON.parse(storedMenu) : [];

    const filteredItems = menu.find(item => item.category === category).items;

    localStorage.setItem('menu', JSON.stringify(menu));

    localStorage.setItem('selectedCategory', category);

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

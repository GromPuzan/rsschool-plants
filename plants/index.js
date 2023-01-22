console.log('1.Вёрстка валидная +10.\n2.Вёрстка семантическая +20.\n3.Вёрстка соответствует макету +48.\n4.Требования к css + 12.\n5.Интерактивность, реализуемая через css +20.\nИтого:110 баллов.')
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-list'),
    navItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamb');
    menuActive = document.querySelector('.nav-list_active')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamb_active');
        menu.classList.toggle('nav-list_active');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamb_active');
            menu.classList.toggle('nav-list_active');
        })
    })
})
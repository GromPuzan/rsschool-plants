console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +24 \n2.	Вёрстка соответствует макету. Ширина экрана 380px +24 \n3.	Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n4.	На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px) \nИтого:82 балла.')
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-list'),
    navItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamb');
    menuActive = document.querySelector('.nav-list_active')
    serviceItem = document.querySelector('.service-item')
    serviceBtn = document.querySelector('.service-btn')

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
    serviceBtn.addEventListener('click', () => {
        serviceBtn.classList.toggle('service-btn_active')
        serviceItem.classList.toggle('service-item_blur')
    })
})
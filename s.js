/* === СКРИПТ 1: БУРГЕР-МЕНЮ === */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // 1. Показать/Скрыть меню
        nav.classList.toggle('nav-active');

        // 2. Анимация ссылок (появление)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // 3. Анимация "крестика" (бургер)
        burger.classList.toggle('toggle');
    });
}

/* === СКРИПТ 2: НОВАЯ ПРИМОЧКА (АНИМАЦИЯ ПРИ ПРОКРУТКЕ) === */
const scrollAnimate = () => {
    // Находим все элементы, которые мы хотим "показывать"
    const hiddenElements = document.querySelectorAll('.hidden');

    // Создаем "наблюдателя"
    const observer = new IntersectionObserver((entries) => {
        // Перебираем все элементы, за которыми наблюдаем
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Если элемент появился в зоне видимости - добавляем ему класс 'visible'
                entry.target.classList.add('visible');
            } 
            // Мы не будем убирать класс, чтобы анимация сработала 1 раз
            // (Так красивее)
        });
    });

    // Говорим "наблюдателю" следить за каждым из наших "скрытых" элементов
    hiddenElements.forEach((el) => observer.observe(el));
}


// === ЗАПУСКАЕМ ОБА СКРИПТА ===
navSlide();
scrollAnimate();
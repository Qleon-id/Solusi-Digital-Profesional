// Tailwind Theme Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#001F3F',
                    maroon: '#800000',
                    cream: '#FFFDD0',
                    offwhite: '#F9F9F9',
                    cyan: '#E0FFFF'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Lexend', 'sans-serif'],
            }
        }
    }
}

// Logic for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
});

// Simple Scroll Effect for Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});
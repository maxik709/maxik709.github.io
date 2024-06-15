document.addEventListener('DOMContentLoaded', () => {
    const toTopButton = document.getElementById('to-top');
    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.textContent = nav.classList.contains('active') ? '▲' : '▼'; // Toggle arrow direction
    });
});

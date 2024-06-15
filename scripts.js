
document.addEventListener('DOMContentLoaded', () => {

    const toTopButton = document.getElementById('to-top');
    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});

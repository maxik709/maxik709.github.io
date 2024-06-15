
document.addEventListener('DOMContentLoaded', () => {

    const toTopButton = document.getElementById('to-top');
    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

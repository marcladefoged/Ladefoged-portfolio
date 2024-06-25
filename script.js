const scrollToTop = document.querySelector(".back-top");

window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

scrollToTop.addEventListener('click', () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
});





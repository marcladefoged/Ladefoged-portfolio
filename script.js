const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.querySelector("header ul").classList.toggle("show");
});

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





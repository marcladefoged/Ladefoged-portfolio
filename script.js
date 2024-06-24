const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});


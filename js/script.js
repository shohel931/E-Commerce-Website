const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// Slider functionality
const slides = document.querySelectorAll('.slide');
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});
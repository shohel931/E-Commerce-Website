const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// Slider functionality
const slides = document.querySelectorAll('.slide');
let index = 0;
let slideInterval;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
});

function showSlide() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}
startAutoSlide();
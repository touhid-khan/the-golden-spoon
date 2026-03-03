// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Sticky navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 50);
});
// Navigation hamburger menu and scroll effect
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbarLinks = document.querySelector(".navbar-links");
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    navbarLinks.classList.toggle("open");
  });
  const navLinks = document.querySelectorAll(".navbar-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navbarLinks.classList.remove("open");
    });
  });
});

// Section/experience/education scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const experienceItems = document.querySelectorAll(".experience-item");
  const educationItems = document.querySelectorAll(".education-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
  experienceItems.forEach((item) => {
    observer.observe(item);
  });
  educationItems.forEach((item) => {
    observer.observe(item);
  });
});

// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 40,
        behavior: "smooth",
      });
    });
  });
});

function adjustHeroTitle() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  // Remove the three-lines class to measure single-line overflow
  heroTitle.classList.remove('hero-title--three-lines');

  // Check if the text overflows its container
  if (heroTitle.scrollWidth > heroTitle.clientWidth) {
    heroTitle.classList.add('hero-title--three-lines');
  }
}

window.addEventListener('DOMContentLoaded', adjustHeroTitle);
window.addEventListener('resize', adjustHeroTitle);
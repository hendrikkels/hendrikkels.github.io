// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
// window.addEventListener('scroll', function () {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 50) {
//     navbar.style.backgroundColor = '#fff';
//     navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
//   } else {
//     navbar.style.backgroundColor = 'transparent';
//     navbar.style.boxShadow = 'none';
//   }
// });

// Add animation class to elements when they come into view
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

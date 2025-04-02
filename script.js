// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navigation background change on scroll
const nav = document.querySelector('.global-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 0) {
    nav.style.backgroundColor = 'var(--nav-background-scrolled-color)';
  } else {
    nav.style.backgroundColor = 'var(--nav-background-color)';
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    this.appendChild(successMessage);

    // Reset form
    this.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}

// Add hover effect to project cards
document.querySelectorAll('.projects-grid > div').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)';
    this.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// Mobile menu toggle (you can add a mobile menu button to the HTML)
const createMobileMenu = () => {
  const nav = document.querySelector('.nav-container');
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.className = 'mobile-menu-button';
  mobileMenuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

  nav.appendChild(mobileMenuButton);

  mobileMenuButton.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
};

// Initialize mobile menu on small screens
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// Add CSS for mobile menu
const mobileMenuStyle = document.createElement('style');
mobileMenuStyle.textContent = `
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
    
    .mobile-menu-button span {
        display: block;
        width: 25px;
        height: 2px;
        background-color: var(--text-color);
        margin: 5px 0;
        transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
        
        .nav-links {
            display: none;
            position: fixed;
            top: 44px;
            left: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 20px;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        
        .nav-links.show {
            display: flex;
        }
    }
`;
document.head.appendChild(mobileMenuStyle); 
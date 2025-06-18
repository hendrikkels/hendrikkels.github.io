// Navigation hamburger menu and scroll effect
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbarLinks = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".navbar-link");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    navbarLinks.classList.toggle("open");

    if (navbarLinks.classList.contains("open")) {
      navLinks.forEach((link, i) => {
        link.classList.remove("menu-animate-in");
        setTimeout(() => {
          link.classList.add("menu-animate-in");
        }, i * 100); // Remove the initial 10ms delay
      });
    } else {
      navLinks.forEach((link) => {
        link.classList.remove("menu-animate-in");
      });
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navbarLinks.classList.remove("open");
      navLinks.forEach((l) => l.classList.remove("menu-animate-in"));
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
        top: targetElement.offsetTop ,
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

document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("hero-name");
  const surname = document.getElementById("hero-surname");
  const subtitle1 = document.getElementById("hero-subtitle-1");
  const subtitle2 = document.getElementById("hero-subtitle-2");
  const subtitle3 = document.getElementById("hero-subtitle-3");
  const subtitle4 = document.getElementById("hero-subtitle-4");

  if (name && surname && subtitle1 && subtitle2 && subtitle3 && subtitle4) {
    name.classList.remove("visible");
    surname.classList.remove("visible");
    [subtitle1, subtitle2, subtitle3, subtitle4].forEach(sub => {
      sub.classList.remove("visible", "fade-out");
      sub.style.display = "none";
    });
    subtitle1.style.display = "";

    setTimeout(() => {
      name.classList.add("visible");
      setTimeout(() => {
        surname.classList.add("visible");
        setTimeout(() => {
          // Subtitle 1 fade in
          subtitle1.classList.add("visible");
          setTimeout(() => {
            // Subtitle 1 fade out
            subtitle1.classList.add("fade-out");
            setTimeout(() => {
              subtitle1.classList.remove("visible", "fade-out");
              subtitle1.style.display = "none";
              // Subtitle 2 fade in
              subtitle2.style.display = "";
              setTimeout(() => {
                subtitle2.classList.add("visible");
                setTimeout(() => {
                  // Subtitle 2 fade out
                  subtitle2.classList.add("fade-out");
                  setTimeout(() => {
                    subtitle2.classList.remove("visible", "fade-out");
                    subtitle2.style.display = "none";
                    // Subtitle 3 fade in
                    subtitle3.style.display = "";
                    setTimeout(() => {
                      subtitle3.classList.add("visible");
                      setTimeout(() => {
                        // Subtitle 3 fade out
                        subtitle3.classList.add("fade-out");
                        setTimeout(() => {
                          subtitle3.classList.remove("visible", "fade-out");
                          subtitle3.style.display = "none";
                          // Subtitle 4 fade in and persist
                          subtitle4.style.display = "";
                          setTimeout(() => {
                            subtitle4.classList.add("visible");
                          }, 10);
                        }, 1200); // fade out duration
                      }, 3500); // subtitle 3 visible duration
                    }, 10);
                  }, 1200); // fade out duration
                }, 3500); // subtitle 2 visible duration
              }, 10);
            }, 1200); // fade out duration
          }, 3500); // subtitle 1 visible duration
        }, 400);
      }, 400);
    }, 400);
  }
});

// Contact copy-to-clipboard interactivity

document.addEventListener("DOMContentLoaded", function () {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const value = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value);
      } else {
        // fallback for older browsers
        const temp = document.createElement('input');
        temp.value = value;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      btn.classList.add('copied');
      btn.title = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.title = 'Copy';
      }, 1200);
    });
  });
});
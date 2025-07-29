// Hero section loading animation
function initPageAnimations() {
  // Hero elements
  const heroElements = document.querySelectorAll(
    ".hero-fade-in, .hero-slide-left, .hero-slide-right, .hero-scale-in, .stats-card"
  );

  // Problem/Solution section elements
  const sectionElements = document.querySelectorAll(
    ".section-fade-in, .feature-slide-up"
  );

  // Combined animation sequence
  const allElements = [...heroElements, ...sectionElements];

  // Staggered animation delays - hero first, then section
  const delays = [
    0, // Hero title
    200, // Hero description
    400, // Hero buttons
    600, // Hero features
    800, // Hero image
    1000, // Stats card 1
    1200, // Stats card 2
    1400, // Section title
    1600, // Feature 1
    1750, // Feature 2
    1900, // Feature 3
  ];

  allElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("animate");
    }, delays[index] || 0);
  });
}

// Initialize animations on page load
window.addEventListener("load", () => {
  document.querySelector("form").reset(); // Reset form on load
  setTimeout(() => {
    initPageAnimations();
  }, 300); // Small delay to ensure page is fully loaded
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll to top on click to navbar logo
const navbarLogo = document.getElementById("navbar-logo");
if (navbarLogo) {
  navbarLogo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-white/95", "backdrop-blur-sm");
  } else {
    header.classList.remove("bg-white/95", "backdrop-blur-sm");
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    // Toggle hamburger icon
    const icon = mobileMenuButton.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.className = "fas fa-bars text-xl";
    } else {
      icon.className = "fas fa-times text-xl";
    }
  });

  // Close mobile menu when clicking on links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      const icon = mobileMenuButton.querySelector("i");
      icon.className = "fas fa-bars text-xl";
    });
  });
}

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  alert("Merci pour votre demande ! Nous vous contacterons bientôt.");
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".card-hover, .animate-on-scroll, .feature-slide-up, .section-fade-in"
  );
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize scroll animations
document
  .querySelectorAll(
    ".card-hover, .animate-on-scroll, .feature-slide-up, .section-fade-in"
  )
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on load

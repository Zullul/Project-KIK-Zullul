// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Animasi fade in saat scroll dengan Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Tambahkan animasi ke semua card dan gallery items
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .gallery-item, .feature-item');
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
  });
});

// Counter animation untuk angka (optional - bisa diaktifkan jika ada)
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Gallery lightbox effect (simple zoom on click)
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    const img = this.querySelector('img');
    if (img) {
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
      `;
      
      const lightboxImg = document.createElement('img');
      lightboxImg.src = img.src;
      lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(0, 208, 255, 0.5);
      `;
      
      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);
      
      // Close on click
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
      
      // Animate in
      setTimeout(() => {
        lightbox.style.opacity = '1';
      }, 10);
    }
  });
});

// Add pulse animation to featured card
const featuredCard = document.querySelector('.card.featured');
if (featuredCard) {
  setInterval(() => {
    featuredCard.style.animation = 'pulse 1s';
    setTimeout(() => {
      featuredCard.style.animation = '';
    }, 1000);
  }, 5000);
}

// Add CSS for pulse animation dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3); }
    50% { box-shadow: 0 15px 50px rgba(255, 215, 0, 0.6); }
  }
`;
document.head.appendChild(style);

// Console log untuk debugging
console.log('🎵 Iyan Parkin Website Loaded Successfully!');
console.log('� Professional Sound System & Lighting');
console.log('✨ All animations and interactions ready!');

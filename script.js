// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Subtle parallax on hero elements
const heroGrid = document.querySelector('.hero-grid');
const heroGlow = document.querySelector('.hero-glow');
const heroGlow2 = document.querySelector('.hero-glow2');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroGrid.style.transform = `perspective(600px) rotateX(10deg) translateY(${y * 0.15}px)`;
    heroGlow.style.transform = `translateY(${y * 0.08}px)`;
    heroGlow2.style.transform = `translateY(${y * 0.05}px)`;
    heroContent.style.transform = `translateY(${y * 0.12}px)`;
    heroContent.style.opacity = 1 - (y / (window.innerHeight * 0.7));
  }
}, { passive: true });

// Nav active state
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(13,17,23,0.95)'
    : 'rgba(13,17,23,0.8)';
}, { passive: true });

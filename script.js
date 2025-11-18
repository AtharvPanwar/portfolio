// Init AOS scroll animations
AOS.init({
  duration: 800,
  once: true,
  easing: 'cubic-bezier(.2,.8,.2,1)'
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links (modern browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // update focus for keyboard users
    setTimeout(() => { target.setAttribute('tabindex', '-1'); target.focus(); }, 600);
  });
});

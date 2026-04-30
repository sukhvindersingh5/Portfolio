const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  const toggle = document.getElementById('themeToggle');
  const thumb = document.getElementById('toggleThumb');
  const html = document.documentElement;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') { html.classList.add('dark'); thumb.textContent = '🌙'; }

  toggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    thumb.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
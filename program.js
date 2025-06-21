const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }else{
            entry.target.classList.remove('visible');
        }
    });
}, {
  threshold: 0.2  
});

sections.forEach(section => {
    observer.observe(section);
});

const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


const scrollTopLink = document.getElementById('scrollTopLink');
scrollTopLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

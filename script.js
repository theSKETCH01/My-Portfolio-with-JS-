// Reveal sections on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    if (top > offset && top < offset + height) {
      sec.classList.add('show');
    }
  });
});

// Active nav link change on scroll
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') == '#' + current) {
      link.classList.add('active');
    }
  });
});

// Form fake submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! 🚀 I will get back to you soon.');
  this.reset();
});

// Scroll to top button
const topBtn = document.getElementById('topBtn');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

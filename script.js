// Typing effect for hero
const phrases = [
  'reliable systems.',
  'clean APIs.',
  'data pipelines.',
  'scalable platforms.',
  'CI/CD pipelines.',
  'secure architectures.',
  'things that ship.',
];

const el = document.getElementById('typed');
let pIdx = 0;
let cIdx = 0;
let deleting = false;

function tick() {
  if (!el) return;
  const word = phrases[pIdx];
  el.textContent = word.slice(0, cIdx);

  if (!deleting && cIdx < word.length) {
    cIdx++;
    setTimeout(tick, 70);
  } else if (deleting && cIdx > 0) {
    cIdx--;
    setTimeout(tick, 35);
  } else {
    deleting = !deleting;
    if (!deleting) pIdx = (pIdx + 1) % phrases.length;
    setTimeout(tick, deleting ? 1400 : 300);
  }
}
tick();

// Year in footer
const yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();

// Reveal sections on scroll
const sections = document.querySelectorAll('.section');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach((s) => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  io.observe(s);
});

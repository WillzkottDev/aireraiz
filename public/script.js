
const header = document.querySelector('.topbar');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

menuBtn.addEventListener('click', () => {
  const open = !navLinks.classList.contains('open');
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.getElementById('lead-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(e.target);
  const text =
`Hola Aire Raíz 👋
Soy ${fd.get('name')}.
Consulto: ${fd.get('forwhom')}.
Me interesa: ${fd.get('interest')}.
${fd.get('message') ? `Comentario: ${fd.get('message')}` : ''}

¿Me pasan información de clases, horarios y valores?`;
  window.open('https://wa.me/5492995104753?text=' + encodeURIComponent(text), '_blank', 'noopener');
});


const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

menuBtn.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
const modal = document.getElementById('message-modal');
const generated = document.getElementById('generated-message');
const copyBtn = document.getElementById('copy-message');
const closeBtn = document.querySelector('.modal-close');
const openWhatsapp = document.getElementById('open-whatsapp');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const goal = data.get('goal') || '';
  const mode = data.get('mode') || '';
  const message = data.get('message') || '';

  generated.value =
`Hola Aire Raíz 👋 Soy ${name}.

Me gustaría consultar por entrenamiento personalizado.
Mi objetivo principal: ${goal}.
Modalidad: ${mode}.

${message ? `Un poco sobre mí: ${message}` : ''}

¿Me cuentan qué opciones tienen disponibles?`;

  if (openWhatsapp) {
    openWhatsapp.href = 'https://wa.me/5492995104753?text=' + encodeURIComponent(generated.value);
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  generated.focus();
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

copyBtn.addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText(generated.value);
    copyBtn.textContent = '¡Copiado!';
    setTimeout(() => copyBtn.textContent = 'Copiar mensaje', 1800);
  }catch{
    generated.select();
    document.execCommand('copy');
    copyBtn.textContent = '¡Copiado!';
  }
});

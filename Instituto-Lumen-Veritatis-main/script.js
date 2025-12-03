// Año dinámico en footer
document.getElementById("year").textContent = new Date().getFullYear();

// JS para carrusel horizontal Oferta Educativa
const carrusel = document.querySelector('.carrusel-oferta');

// Scroll automático opcional
let isDown = false;
let startX;
let scrollLeft;

carrusel.addEventListener('mousedown', (e) => {
  isDown = true;
  carrusel.classList.add('active');
  startX = e.pageX - carrusel.offsetLeft;
  scrollLeft = carrusel.scrollLeft;
});
carrusel.addEventListener('mouseleave', () => {
  isDown = false;
  carrusel.classList.remove('active');
});
carrusel.addEventListener('mouseup', () => {
  isDown = false;
  carrusel.classList.remove('active');
});
carrusel.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrusel.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  carrusel.scrollLeft = scrollLeft - walk;
});



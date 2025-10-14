document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-menu');
  const closeBtn = document.getElementById('closeBurger');
  const overlay = document.getElementById('burgerOverlay');

  const openBurger = () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeBurger = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = ''; 
  };

  burgerBtn.addEventListener('click', openBurger);
  closeBtn.addEventListener('click', closeBurger);

  const links = overlay.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeBurger);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeBurger();
    }
  });
});
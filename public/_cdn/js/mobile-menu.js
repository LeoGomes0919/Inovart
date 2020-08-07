const menu = document.querySelector('.menu-mobile-obj');
const submenu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  submenu.classList.toggle('ds-none');
  submenu.classList.toggle('mobile-menu-active');
});
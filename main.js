const nav = document.querySelector('nav');
const mobileNav = document.querySelector('nav.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closIcon = document.querySelector('.mobile-menu-container .close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 60) {
    mobileNav.classList.add('scrolled');
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
    mobileNav.classList.remove('scrolled');
  }
});

menuIcon.addEventListener('click', () => {
  mobileMenuContainer.classList.add('active');
});
closIcon.addEventListener('click', () => {
  mobileMenuContainer.classList.remove('active');
});

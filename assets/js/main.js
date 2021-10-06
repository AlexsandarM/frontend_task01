const navbarToggler = document.querySelector('.navbar-toggler-icon');
const navbarLinks = document.querySelector('.navbar-nav');

// Hamburger menu
navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('isactive');
  navbarLinks.classList.toggle('active');
});

// Scrolling
document.querySelector('main').scrollIntoView({
  behavior: 'smooth',
});

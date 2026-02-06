const contactTitle = document.querySelector('.animate');

window.addEventListener('scroll', () => {
  const position = contactTitle.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight) {
    contactTitle.style.opacity = '1';
    contactTitle.style.transform = 'translateY(0)';
  }
});

contactTitle.style.opacity = '0';
contactTitle.style.transform = 'translateY(40px)';
contactTitle.style.transition = '1s ease';

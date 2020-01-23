const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinksLi = document.querySelectorAll('.nav-links li');
  const navLinks = document.querySelectorAll('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    nav.classList.toggle('nav-closed');
    burger.classList.toggle('toggle');

    //   burger.classList.toggle('toggle');
  });

  navLinksLi.forEach(navLink => {
    navLink.addEventListener('click', () => {
      burger.classList.remove('toggle');
      nav.classList.remove('nav-active');
      nav.classList.add('nav-closed');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      burger.classList.remove('toggle');
      nav.classList.remove('nav-active');
    }
  });
};

navSlide();

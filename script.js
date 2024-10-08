window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const deskProject = document.querySelectorAll('.desk__project');
  const logo = document.querySelector('.logo');
  const navList = document.querySelector('.nav__list');
  loadingScreen.classList.add('loaded');
  deskProject.forEach((elem) => elem.classList.add('loaded'));
  setTimeout(() => logo.style.transform = 'translateY(0%)', 1000);
  setTimeout(() => navList.style.transform = 'translateY(0%)', 1000);

});

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const header = document.querySelector('.header');
  const navItems = document.querySelectorAll('.nav__item');
  const logoLeft = document.querySelector('#logo-left');
  const logo = document.querySelector('#logo');
  const logoMid = document.querySelector('#logo-mid');
  const logoRight = document.querySelector('#logo-right');
  const main = document.querySelector('main');
  const deskNames = document.querySelectorAll('.desk__project_name');
  const sliderTexts = document.querySelectorAll('.slider-text');

  if (scrollY > 100) {
    document.body.style.backgroundColor = '#111';
    document.body.style.transition = '2s';
    main.classList.replace('main','dark-mode');
    header.classList.remove('light-bg');
    header.classList.add('dark-bg');
    navItems.forEach((elem) => elem.classList.add('dark-text'));
    deskNames.forEach((elem) => elem.classList.add('dark_text'));
    sliderTexts.forEach((elem) => elem.classList.add('slider-dark'));
    logoLeft.classList.replace('logo__left-part', 'dark-logo__left-part');
    logo.classList.replace('logo', 'dark-logo');
    logoMid.classList.replace('logo__mid-part', 'dark-logo__mid-part');
    logoRight.classList.replace('logo__right-part', 'dark-logo__right-part');

  } else {
    document.body.style.backgroundColor = '#d2d2d2';
    document.body.style.transition = '2s';
    main.classList.replace('dark-mode', 'main');
    header.classList.remove('dark-bg');
    header.classList.add('light-bg');
    navItems.forEach((elem) => elem.classList.remove('dark-text'));
    deskNames.forEach((elem) => elem.classList.remove('dark_text'));
    sliderTexts.forEach((elem) => elem.classList.remove('slider-dark'));
    logoLeft.classList.replace('dark-logo__left-part', 'logo__left-part');
    logo.classList.replace('dark-logo', 'logo');
    logoMid.classList.replace('dark-logo__mid-part', 'logo__mid-part');
    logoRight.classList.replace('dark-logo__right-part', 'logo__right-part');
  }
});


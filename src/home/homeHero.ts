function heroAnim(): void {
  const heroElement = document.querySelector('.scrolling-hero_frame-w') as HTMLElement | null;
  const navbarElement = document.querySelector('.section_navbar#navbar-home') as HTMLElement | null;

  if (!heroElement || !navbarElement) return; // Si l'un des éléments n'existe pas, sortez de la fonction.

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.9) {
      heroElement.classList.add('hide');
      navbarElement.style.top = '0rem';
      navbarElement.classList.add('z-index-100');
    } else {
      heroElement.classList.remove('hide');
      navbarElement.style.top = '-10rem';
      navbarElement.classList.remove('z-index-100');
    }

    if (window.scrollY > 400) {
      navbarElement.style.top = '0rem';
    } else {
      navbarElement.style.top = '-10rem';
    }
  });
}

export { heroAnim };

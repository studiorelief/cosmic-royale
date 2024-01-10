function heroAnim(): void {
  const heroElement = document.querySelector('.scrolling-hero_frame-w') as HTMLElement | null;
  const navbarElement = document.querySelector('.section_navbar#navbar-home') as HTMLElement | null;

  if (!heroElement || !navbarElement) return; // Si l'un des éléments n'existe pas, sortez de la fonction.

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1.5) {
      heroElement.classList.add('hide');
      heroElement.style.opacity = '0'; // Ajoutez cette ligne
      navbarElement.style.top = '0rem';
      navbarElement.classList.add('z-index-100');
      navbarElement.style.opacity = '1'; // Ajoutez cette ligne
    } else {
      heroElement.classList.remove('hide');
      heroElement.style.opacity = '1'; // Ajoutez cette ligne
      navbarElement.style.top = '-10rem';
      navbarElement.classList.remove('z-index-100');
      navbarElement.style.opacity = '0'; // Ajoutez cette ligne
    }

    if (window.scrollY > 400) {
      navbarElement.style.top = '0rem';
    } else {
      navbarElement.style.top = '-10rem';
    }
  });
}

export { heroAnim };

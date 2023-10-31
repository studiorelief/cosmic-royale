import Typed from 'typed.js';

function typeHero(): void {
  const el1 = document.querySelector('.about_heading-1');
  const el2 = document.querySelector('.about_heading-1-shadow');

  // Options pour Typed.js
  const originalText = 'Race, Battle, Win';
  const reversedText = originalText
    .split(/([,\s]+)/)
    .reverse()
    .join('');

  const options = {
    strings: [reversedText],
    typeSpeed: 75,
    loop: false,
    showCursor: false, // Enlève le curseur
  };

  const startTypedAnimation = () => {
    new Typed('.about_heading-1', options);

    if (el1 && el2) {
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'childList') {
            el2.textContent = el1.textContent;
          }
        }
      });

      observer.observe(el1, { childList: true });
    }
  };

  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startTypedAnimation();
        intersectionObserver.unobserve(entry.target); // Arrêtez d'observer une fois l'animation démarrée
      }
    });
  });

  if (el1) {
    intersectionObserver.observe(el1);
  }
}

// Exécutez la fonction pour démarrer l'observation
export { typeHero };

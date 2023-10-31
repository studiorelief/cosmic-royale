import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//! Fonction Sparkle

function sparkleAnim(): void {
  // Animation pour les éléments avec l'attribut sparkle=is-big
  document.querySelectorAll('[sparkle="is-big"]').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '6rem',
      },
      {
        y: '-6rem',
        scrollTrigger: {
          trigger: element,
          start: 'bottom bottom',
          end: 'top top',
          scrub: 3,
        },
      }
    );
  });

  // Animation pour les éléments avec l'attribut sparkle=is-middle
  document.querySelectorAll('[sparkle="is-middle"]').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '4rem',
      },
      {
        y: '-4rem',
        scrollTrigger: {
          trigger: element,
          start: 'bottom bottom',
          end: 'top top',
          scrub: 2,
        },
      }
    );
  });

  // Animation pour les éléments avec l'attribut sparkle=is-small
  document.querySelectorAll('[sparkle="is-small"]').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: '2rem',
      },
      {
        y: '-2rem',
        scrollTrigger: {
          markers: false,
          trigger: element,
          start: 'bottom bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );
  });
}

//! Fonction Kart

function kartAnim(): void {
  // Sélectionnez tous les éléments avec l'attribut gsap="kart"
  const karts = document.querySelectorAll('[gsap="kart"]');

  // Parcourez chaque élément et appliquez la fonction
  karts.forEach((kart) => {
    gsap.fromTo(
      kart, // Ciblez l'élément individuel
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: kart, // Ciblez l'élément individuel
          start: 'bottom 75%',
          end: 'top 75%',
          scrub: 1,
          markers: false,
        },
      }
    );
  });
}

//! Fonction Loop rotate

function planetAnim(): void {
  const planetDurations: { [key: string]: number } = {
    '.planete_1': 21,
    '.planete_1-1': 18,
    '.planete_2': 15,
    '.planete_2-1': 13,
    '.planete_3': 10,
    '.planete_3-1': 8,
    '.planete_4': 7,
    '.planete_4-1': 5,
  };

  for (const [planetSelector, duration] of Object.entries(planetDurations)) {
    const planets = document.querySelectorAll(planetSelector);

    planets.forEach((planet) => {
      gsap.to(planet, {
        rotationZ: 360,
        repeat: -1, // Infinite repetition
        duration: duration,
        ease: 'none', // Linear easing
      });
    });
  }
}

export { kartAnim, planetAnim, sparkleAnim };

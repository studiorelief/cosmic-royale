import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

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

  gsap.to('[sparkle="is-big"]', {
    duration: 30,
    rotate: 360,
    repeat: -1, // Infinite loop
    ease: 'linear',
  });

  gsap.to('[sparkle="is-medium"]', {
    duration: 40,
    rotate: 360,
    repeat: -1, // Infinite loop
    ease: 'linear',
  });

  gsap.to('[sparkle="is-small"]', {
    duration: 50,
    rotate: 360,
    repeat: -1, // Infinite loop
    ease: 'linear',
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

function animateRoadmap() {
  gsap.set('.roadmap_step', { opacity: 0.2, y: '4rem' });
  gsap.to('.roadmap_step', {
    scrollTrigger: {
      markers: false,
      trigger: '.roadmap_right',
      start: '0% 55%', // Ajustez ces valeurs selon vos besoins
      end: '75% 55%',
      scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 5,
    stagger: 3,
  });
}

function animateRotate() {
  gsap.set('#planete-1, #planete-2, #planete-3, #planete-4, #planete-5, #planete-6', {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: '50% 50%',
  });
  // path 1
  gsap.to('#planete-1', {
    duration: 20,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path1',
      align: '#path1',
      autoRotate: false,
    },
  });
  // path 2
  gsap.to('#planete-2', {
    duration: 10,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path2',
      align: '#path2',
      autoRotate: false,
    },
  });
  gsap.to('#planete-5', {
    duration: 6,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path2',
      align: '#path2',
      autoRotate: false,
    },
  });
  // path 3
  gsap.to('#planete-3', {
    duration: 7,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path3',
      align: '#path3',
      autoRotate: false,
    },
  });
  // path 4
  gsap.to('#planete-4', {
    duration: 9,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path4',
      align: '#path4',
      autoRotate: false,
    },
  });
  gsap.to('#planete-5', {
    duration: 12,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#path2',
      align: '#path2',
      autoRotate: false,
    },
  });
}

export { animateRoadmap, animateRotate, kartAnim, planetAnim, sparkleAnim };

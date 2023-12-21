import 'src/index.css';

import { animateRoadmap, kartAnim, planetAnim, sparkleAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modalviewer';
import { typeHero } from '$utils/typed';

import { heroAnim } from './home/homeHero';

window.Webflow ||= [];
window.Webflow.push(() => {
  // hero scrolling
  heroAnim();
  loadModelViewerScript();
  typeHero();

  // gsap animation
  sparkleAnim();
  kartAnim();
  planetAnim();
  animateRoadmap();

  // Attendez 2 secondes, puis, si vous êtes en haut de la page, faites défiler de 120% de la hauteur de la fenêtre de visualisation
  setTimeout(() => {
    if (window.scrollY === 0) {
      // Vérifie si la position de défilement est en haut de la page
      window.scrollBy({ top: window.innerHeight * 1.25, behavior: 'smooth' });
    }
  }, 2000);
});

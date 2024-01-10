import 'src/index.css';

import { animateRoadmap, animateRotate, kartAnim, planetAnim, sparkleAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modalviewer';
import { typeHero } from '$utils/typed';

import { heroAnim } from './home/homeHero';

window.Webflow ||= [];
window.Webflow.push(() => {
  // hero scrolling
  if (window.innerWidth >= 900) {
    heroAnim();
  }

  loadModelViewerScript();
  typeHero();

  // gsap animation
  sparkleAnim();
  kartAnim();
  planetAnim();
  animateRoadmap();

  // Gsap planete
  animateRotate();

  /*   setTimeout(() => {
    if (window.location.pathname === '/') {
      // Checks if the current page is the homepage
      if (window.scrollY === 0) {
        // Checks if the scroll position is at the top of the page
        window.scrollBy({ top: window.innerHeight * 2.1, behavior: 'smooth' });
      }
    }
  }, 2000); */
});

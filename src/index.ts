import 'src/index.css';

import { kartAnim, planetAnim, sparkleAnim } from '$utils/gsap';
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
  ScrollTrigger.refresh();
});

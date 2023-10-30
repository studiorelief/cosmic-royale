import 'src/index.css';

import { kartAnim, planetAnim, sparkleAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modalviewer';

import { heroAnim } from './home/homeHero';

window.Webflow ||= [];
window.Webflow.push(() => {
  // hero scrolling
  heroAnim();
  loadModelViewerScript();

  // gsap animation
  sparkleAnim();
  kartAnim();
  planetAnim();
  ScrollTrigger.refresh();
});

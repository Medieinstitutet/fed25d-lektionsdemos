import './style.css';

import { gsap } from "gsap";

const enterBtn = document.querySelector('#enter');
enterBtn?.addEventListener('click', enterGame);

function enterGame() {
  gsap.to('#enter', { autoAlpha: 0, duration: 1 });
  gsap.to('.screen2', {
    opacity: 0,
    duration: 1,
    onComplete: animateBoxes,
   });
}

function animateBoxes() {
  // document.querySelector('#screen1')?.classList.remove('hidden');

let tl = gsap.timeline();
    tl.to("#green", {duration: 5, rotate: 100, x: 200, ease: "bounce.out"})
      .to("#blue", {duration: 2, x: 120})
      .to("#orange", {duration: 1, y: 150})

  gsap.to('.red', { rotation: 360, x: 400, repeat: -1, yoyo: true, duration: 3 });
}
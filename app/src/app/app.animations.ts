
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import {
  bounce,
  fadeOutLeft,
  fadeInLeft,
  fadeOutUp,
  fadeOut,
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeOutDown,
  flash,
  pulse,
  rubberBand,
  tada,
  wobble,
  bounceIn,
  fadeIn,
  jackInTheBox,
  hinge,
  rollIn,
  zoomIn,
} from 'ng-animate';

export const slideCardAnim = trigger('slideCardAnim', [
    transition('void => *', useAnimation(bounceIn)),
]);
export const show = trigger('show', [
  transition('void => *', useAnimation(bounceIn)),
]);



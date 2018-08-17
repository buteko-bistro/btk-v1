import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { AG } from './animations';






const animLeftL = AG.swipeEL("left", '38rem');
const animRightL = AG.swipeEL("right", '38rem');


const animUpS = AG.swipeEL("up", '98vw');
const animDownS = AG.swipeEL("down", '98vw');



export const routerTransition = trigger('routerTransition', [
  transition('foodsL => drinksL', animLeftL),
  transition('foodsL => contactL', animLeftL),
  transition('drinksL => foodsL', animRightL),
  transition('drinksL => contactL', animLeftL),
  transition('contactL => drinksL', animRightL),
  transition('contactL => foodsL', animRightL),

  transition('foodsS => drinksS', animUpS),
  transition('foodsS => contactS', animUpS),
  transition('drinksS => foodsS', animDownS),
  transition('drinksS => contactS', animUpS),
  transition('contactS => drinksS', animDownS),
  transition('contactS => foodsS', animDownS),


])





import { AMRAP as amrapComponent } from './AMRAP';
import { RoundsForTime as roundsForTimeComponent } from './RoundsForTime';
import { Chipper as chipperComponent } from './Chipper';
import { Interval as intervalComponent } from './Interval';
import { ForTime as forTimeComponent } from './ForTime';

import {
  AMRAP,
  ROUNDS_FOR_TIME,
  CHIPPER,
  INTERVAL,
  FOR_TIME
} from './constants';

export const WORKOUT_STYLES = [
  {
    name: AMRAP.name,
    component: amrapComponent
  },
  {
    name: ROUNDS_FOR_TIME.name,
    component: roundsForTimeComponent
  },
  {
    name: CHIPPER.name,
    component: chipperComponent
  },
  {
    name: INTERVAL.name,
    component: intervalComponent
  },
  {
    name: FOR_TIME.name,
    component: forTimeComponent
  }
];

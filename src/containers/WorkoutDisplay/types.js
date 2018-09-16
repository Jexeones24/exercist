import { getRandom } from 'util/random';
import {
  // MODERATE_DURATION,
  // LONG_DURATION,
  SHORT_DURATION
} from './duration';

import {
  AMRAP,
  CHIPPER,
  EMOM,
  E2MOM,
  E3MOM,
  FOR_TIME,
  INTERVAL,
  ROUNDS_FOR_TIME,
  TABATA
} from '../Workouts/constants';

const SHORT_DURATION_WORKOUT_TYPES = [
  AMRAP,
  INTERVAL,
  FOR_TIME,
  ROUNDS_FOR_TIME
];

const MODERATE_DURATION_WORKOUT_TYPES = [
  AMRAP,
  CHIPPER,
  INTERVAL,
  FOR_TIME,
  ROUNDS_FOR_TIME
];

const LONG_DURATION_WORKOUT_TYPES = [
  AMRAP,
  CHIPPER,
  FOR_TIME,
  ROUNDS_FOR_TIME
];

const WORKOUT_TYPES = {
  SHORT_DURATION: SHORT_DURATION_WORKOUT_TYPES,
  MODERATE_DURATION: MODERATE_DURATION_WORKOUT_TYPES,
  LONG_DURATION: LONG_DURATION_WORKOUT_TYPES
};

const getIntervalType = (duration, timeDomain) => {
  if (timeDomain % 3 === 0 && duration !== SHORT_DURATION) {
    return E3MOM;
  }

  if (timeDomain % 2 === 0) {
    if (duration === SHORT_DURATION && timeDomain % 4 === 0) {
      return TABATA;
    }

      return E2MOM;
  }

  return EMOM;
};

export const getWorkoutType = (duration, timeDomain) => {
  return getRandom(WORKOUT_TYPES[duration]);

  // if (type.name === INTERVAL.name) {
    // return getIntervalType(duration, timeDomain);
  // }
};

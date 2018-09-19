import { getRandom } from 'util/random';
import { factors } from 'util/factors';
import {
  EMOM,
  E2MOM,
  E3MOM,
  TABATA,
  INTERVAL_TYPES
} from './constants';

const getIntervalType = (time, duration) => {
  const types = INTERVAL_TYPES.filter(int => int.possibleDurations.includes(duration));
  const typesByTimeFactor = types.filter(type => type.divisibleBy.some(d => factors(time).indexOf(d) !== -1));

  return getRandom(typesByTimeFactor);
};

export const buildInterval = (time, duration) => {
  const type = getIntervalType(time, duration);

  switch (type) {
    case TABATA:
      return TABATA;
    case EMOM:
      return EMOM;
    case E2MOM:
      return E2MOM;
    case E3MOM:
      return E3MOM;
    default:
      console.log('OOPS!');
      break;
  }
};

import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { getRandom } from 'util/random';
import { factors } from 'util/factors';
import { assignWeightLoadsToMovements, getFormattedWeightLoads } from '../util/weightLoad';
import {
  EMOM,
  E2MOM,
  E3MOM,
  TABATA,
  INTERVAL_TYPES
} from './constants';
import { NAMES } from '../../../names';

const getIntervalType = (time, duration) => {
  const types = INTERVAL_TYPES.filter(int => int.possibleDurations.includes(duration));
  const typesByTimeFactor = types.filter(type => type.divisibleBy.some(d => factors(time).indexOf(d) !== -1));

  const type = getRandom(typesByTimeFactor);

  switch (type) {
    case EMOM:
      return EMOM;
    case E2MOM:
      return E2MOM;
    case E3MOM:
      return E3MOM;
    default:
      return TABATA;
  }
};

export const buildInterval = (time, duration) => {
  const name = getRandom(NAMES);
  const type = getIntervalType(time, duration);
  const movementCount = getRandom(type.movementCounts[duration]);
  const movements = getMovements(movementCount);
  const weightLoads = assignWeightLoadsToMovements(movements);
  const secondsPerMovement = calculateSecondsPerMovement(type.workPeriodInSecondsWithRest, movementCount, weightLoads);
  const formattedRepsAndMovements = getFormattedWeightLoads(weightLoads, secondsPerMovement);
  const title = `${type.longName} for ${time} Minutes`;

  return {
    name,
    title,
    formattedRepsAndMovements
  };
};

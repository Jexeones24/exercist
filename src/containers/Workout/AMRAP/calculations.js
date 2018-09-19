import omit from 'lodash/omit';
import { getRandom, getNRandom } from 'util/random';
import { AMRAP } from './constants';
import { MONOSTRUCTURAL, MOVEMENTS, METERS, WEIGHTLIFTING, WEIGHT_LOADS } from '../../../movementData';

const getWeightLoad = (movement) => {
  if (movement.type === WEIGHTLIFTING) {
    const intensity = getRandom(WEIGHT_LOADS);
    const loads = movement.weightLoads[intensity];

    return {
      intensity,
      loads,
      ...omit(movement, ['intensity', 'weightLoads'])
    };
  }

  return { ...omit(movement, ['intensity']) };
};

const getReps = (movement, seconds) => {
  let repsPerRound;

  if (movement.type === MONOSTRUCTURAL && movement.units === METERS) {
    repsPerRound = Math.floor(seconds / movement.secondsPerRep) * 100;
    return [ repsPerRound, movement ]
  }

  repsPerRound = Math.floor(seconds / movement.secondsPerRep)
  return [ repsPerRound, movement ]
};

export const buildAmrap = (time, duration) => {
  const movementCount = getRandom(AMRAP.movementCounts[duration]);
  const estimatedTimePerRound = Math.floor(time * .15);
  const secondsPerMovement = (estimatedTimePerRound * 60) / movementCount;
  const movements = getNRandom(movementCount, MOVEMENTS);
  const movementsWithWeightLoads = movements.map(movement => getWeightLoad(movement));

  return movementsWithWeightLoads.map(movement => getReps(movement, secondsPerMovement));
};

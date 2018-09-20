import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { getRandom } from 'util/random';
import { assignWeightLoadsToMovements, getFormattedWeightLoads } from '../util/weightLoad';
import { AMRAP } from './constants';

const estimatedTimePerRoundInSeconds = (time) => Math.floor((time) * .15) * 60;

export const buildAmrap = (time, duration, workoutStyle) => {
  const movementCount = getRandom(AMRAP.movementCounts[duration]);
  const movements = getMovements(movementCount);
  const movementsWithWeightLoads = assignWeightLoadsToMovements(movements);
  const secondsPerMovement = calculateSecondsPerMovement(estimatedTimePerRoundInSeconds(time), movementCount);
  const formattedRepsAndMovements = getFormattedWeightLoads(movementsWithWeightLoads, secondsPerMovement);
  const title = `${workoutStyle.longName} in ${time} Minutes`;

  return {
    title,
    formattedRepsAndMovements
  };
};

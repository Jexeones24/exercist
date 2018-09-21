import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { getRandom } from 'util/random';
import { assignWeightLoadsToMovements, getFormattedWeightLoads } from '../util/weightLoad';
import { AMRAP } from './constants';

export const buildAmrap = (time, duration, workoutStyle) => {
  const repScheme = getRandom(AMRAP.repSchemes);
  console.log(repScheme);
  const movementCount = getRandom(AMRAP.movementCounts[duration]);
  const movements = getMovements(movementCount);
  const movementsWithWeightLoads = assignWeightLoadsToMovements(movements);
  const estimatedTimePerRoundInSeconds = (time) => Math.floor((time * 60) * .15);
  const secondsPerMovement = calculateSecondsPerMovement(estimatedTimePerRoundInSeconds(time), movementCount);
  const formattedRepsAndMovements = getFormattedWeightLoads(movementsWithWeightLoads, secondsPerMovement);
  const title = `${workoutStyle.longName} in ${time} Minutes`;

  return {
    title,
    formattedRepsAndMovements
  };
};

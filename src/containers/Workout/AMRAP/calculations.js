import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { getRandom } from 'util/random';
import { assignWeightLoadsToMovements } from '../util/weightLoad';
import { AMRAP } from './constants';
import { getAmrapReps } from '../util/reps';
import { NAMES } from '../../../names';

export const buildAmrap = (time, duration, workoutStyle) => {
  const name = getRandom(NAMES);
  const repScheme = getRandom(AMRAP.repSchemes);
  const movementCount = getRandom(AMRAP.movementCounts[duration]);
  const movements = getMovements(movementCount);
  const weightLoadedMovements = assignWeightLoadsToMovements(movements);
  const estimatedTimePerRoundInSeconds = (time) => Math.floor((time * 60) * .15);
  const secondsPerMovement = calculateSecondsPerMovement(estimatedTimePerRoundInSeconds(time), movementCount);
  const formatted = getAmrapReps({ weightLoadedMovements, repScheme, secondsPerMovement });
  const title = `${workoutStyle.longName} in ${time} Minutes`;

  return {
    name,
    title,
    formattedRepsAndMovements: formatted
  };
};

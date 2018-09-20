import { getRandom } from 'util/random';
import { ROUNDS_FOR_TIME } from './constants';
import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { assignWeightLoadsToMovements, getFormattedWeightLoads } from '../util/weightLoad';

const rest = (time) => time * 8;
const workTimePerRoundInSeconds = (time, rounds) => Math.ceil(((time * 60) - rest(time)) / rounds);

export const buildRoundsForTime = (time, duration, workoutStyle) => {
  const rounds = getRandom(ROUNDS_FOR_TIME[duration].roundCountRange);
  const timePerRound = workTimePerRoundInSeconds(time, rounds);
  const movementCount = getRandom(ROUNDS_FOR_TIME[duration].movements);
  const movements = getMovements(movementCount);
  const movementsWithWeightLoads = assignWeightLoadsToMovements(movements);
  const secondsPerMovement = calculateSecondsPerMovement(timePerRound, movementCount);
  const formattedRepsAndMovements = getFormattedWeightLoads(movementsWithWeightLoads, secondsPerMovement);
  const title = `${rounds} ${workoutStyle.longName}`;

  return {
    title,
    formattedRepsAndMovements
  };
};

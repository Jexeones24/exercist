import { getRandom } from 'util/random';
import { ROUNDS_FOR_TIME } from './constants';
import { calculateSecondsPerMovement, getMovements } from '../util/movement';
import { assignWeightLoadsToMovements, getFormattedWeightLoads } from '../util/weightLoad';
import { NAMES } from '../../../names';

const rest = (time) => time * 8;
const workTimePerRoundInSeconds = (time, rounds) => Math.ceil(((time * 60) - rest(time)) / rounds);

export const buildRoundsForTime = (time, duration, workoutStyle) => {
  const name = getRandom(NAMES);
  const rounds = getRandom(ROUNDS_FOR_TIME[duration].roundCountRange);
  const timePerRound = workTimePerRoundInSeconds(time, rounds);
  const movementCount = getRandom(ROUNDS_FOR_TIME[duration].movements);
  const movements = getMovements(movementCount);
  const weightLoads = assignWeightLoadsToMovements(movements);
  const secondsPerMovement = calculateSecondsPerMovement(timePerRound, movementCount, weightLoads);
  const formattedRepsAndMovements = getFormattedWeightLoads(weightLoads, secondsPerMovement);
  const title = `${rounds} ${workoutStyle.longName} (${time}:00 time cap)`;

  return {
    name,
    title,
    formattedRepsAndMovements
  };
};

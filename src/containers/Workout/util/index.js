import { getRandom } from 'util/random';
import { getDuration } from './duration';
import { styles } from '../constants';
import { buildInterval } from '../Interval/calculations';
import { buildAmrap } from '../AMRAP/calculations';
import { buildRoundsForTime } from '../RoundsForTime/calculations';

export const buildWorkout = (time) => {
  const workoutStyle = getRandom(styles);
  const duration = getDuration(time);

  const buildFunctionMap = {
    AMRAP: buildAmrap(time, duration, workoutStyle),
    INTERVAL: buildInterval(time, duration, workoutStyle),
    ROUNDS_FOR_TIME: buildRoundsForTime(time, duration, workoutStyle)
  };

  return buildFunctionMap[workoutStyle.shortName];
};

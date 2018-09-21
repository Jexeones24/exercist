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
    AMRAP: buildAmrap,
    INTERVAL: buildInterval,
    ROUNDS_FOR_TIME: buildRoundsForTime
  };

  return buildFunctionMap[workoutStyle.shortName](time, duration, workoutStyle);
};

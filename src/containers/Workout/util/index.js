import { getRandom } from 'util/random';
import { getDuration } from './duration';
import { styles } from '../constants';
import { buildInterval } from '../Interval/calculations';
import { INTERVAL } from '../Interval/constants';
import { buildAmrap } from '../AMRAP/calculations';
import { AMRAP } from '../AMRAP/constants';
import { buildRoundsForTime } from '../RoundsForTime/calculations';
import { ROUNDS_FOR_TIME } from '../RoundsForTime/constants';

export const buildWorkout = (time) => {
  const workoutStyle = getRandom(styles);
  const duration = getDuration(time);

  switch (workoutStyle) {
    case AMRAP:
      return {
        ...buildAmrap(time, duration, workoutStyle),
      };
    case ROUNDS_FOR_TIME:
      return {
        ...buildRoundsForTime(time, duration, workoutStyle),
      };
    case INTERVAL:
      console.log('INTERVAL');
      return {
        ...buildInterval(time, duration, workoutStyle),
      };
    default:
      console.log('OOPS!');
      break;
  }
};

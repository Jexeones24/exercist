import { getRandom } from 'util/random';
import { DURATIONS } from '../constants';
import { buildInterval } from '../Interval/calculations';
import { INTERVAL } from '../Interval/constants';
import { buildAmrap } from '../AMRAP/calculations';
import { AMRAP } from '../AMRAP/constants';
import { buildRoundsForTime } from '../RoundsForTime/calculations';
import { ROUNDS_FOR_TIME } from '../RoundsForTime/constants';

const getDuration = (time) => {
  let duration;

  for (var range in DURATIONS) {
    if (DURATIONS.hasOwnProperty(range) && DURATIONS[range].includes(time)) {
      duration = range;
    }
  };

  return duration;
};


const styles = [
  AMRAP,
  ROUNDS_FOR_TIME,
  INTERVAL
];

const getWorkoutStyle = (time) => {
  const workoutStyle = getRandom(styles);
  const duration = getDuration(time);

  switch (workoutStyle) {
    case AMRAP:
      return buildAmrap(time, duration);
    case ROUNDS_FOR_TIME:
      return buildRoundsForTime(time);
    case INTERVAL:
      return buildInterval(time, duration);
    default:
      console.log('OOPS!');
      break;
  }
};

export const buildWorkout = (time) => {
  const style = getWorkoutStyle(time);
  console.log(style);
  return 'hello';
};

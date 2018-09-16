import React from 'react';
import { getDuration } from './duration';
import { getWorkoutType } from './types';
import { WORKOUT_STYLES } from '../Workouts';

const WorkoutDisplay = ({ timeDomain }) => {
  const duration = getDuration(timeDomain);
  const type = getWorkoutType(duration, timeDomain);
  console.log('TYPE:', type.name, WORKOUT_STYLES);
  const Component = WORKOUT_STYLES.filter(s => s.name === type.name)[0].component;

  return (
    <div>
      <Component />
    </div>
  );
};

export default WorkoutDisplay;


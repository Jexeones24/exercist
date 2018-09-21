import React, { Component } from 'react';
import Slider from 'components/Slider';
import { buildWorkout } from './util';

import styles from './workout.module.scss';

class Workout extends Component {
  get workouts() {
    return [...Array(3)]
      .map(el => buildWorkout(this.props.time));
  }

  render () {
    return (
      <div className={styles['workout-container']}>
        <Slider
          slides={this.workouts}
        />
      </div>
    );
  }
}

export default Workout;

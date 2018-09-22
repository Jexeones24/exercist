import React, { Component } from 'react';
import Slider from 'components/Slider';
import { buildWorkout } from './util';

import styles from './workout.module.scss';

class Workout extends Component {
  get workouts() {
    return [...Array(10)]
      .map(el => buildWorkout(this.props.time));
  }

  render () {
    return (
      <div className={styles['workout-container']}>
        <Slider
          slides={this.workouts}
          showTimeDisplay={this.props.showTimeDisplay}
        />
      </div>
    );
  }
}

export default Workout;

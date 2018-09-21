import React, { Component } from 'react';
import { buildWorkout } from './util';
import styles from './workout.module.scss';

class Workout extends Component {
  get workout() {
    return buildWorkout(this.props.time);
  }

  get title() {
    return this.workout.title;
  }

  get reps() {
    return (
      this.workout.formattedRepsAndMovements
      .map((reps, idx) => (
        <div key={idx}>{ reps }</div>
      ))
    );
  }

  render () {
    return (
      <div className={styles['workout-container']}>
        <h1>{ this.title }</h1>
        <div>{ this.reps }</div>
      </div>
    );
  }
}

export default Workout;

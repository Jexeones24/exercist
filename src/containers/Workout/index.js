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
        <div className={styles.name}>STOOPID NAME</div>
        <div className={styles['text-wrapper']}>
          <h1>{ this.title }</h1>
          <div>{ this.reps }</div>
        </div>
        <div className={styles.buttons}>
          <button>NEXT</button>
          <button>TRY !</button>
        </div>
      </div>
    );
  }
}

export default Workout;

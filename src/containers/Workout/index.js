import React, { Component } from 'react';
import ScrollBox from 'components/ScrollBox';
import { buildWorkout } from './util';

import styles from './workout.module.scss';

class Workout extends Component {
  state = { workouts: [] }

  componentDidMount() {
    const workout = this.prepareWorkout();
    this.addNewWorkout(workout);
  }

  get lastWorkout() {
    const { workouts } = this.state;
    return  workouts[workouts.length - 1];
  }

  prepareWorkout = () => buildWorkout(this.props.time);

  renderTitle = () => <h1>{ this.lastWorkout.title }</h1>;

  renderReps = () => {
    return (
      <React.Fragment>
        { this.lastWorkout.formattedRepsAndMovements
            .map((reps, idx) => (
              <div key={idx}>{ reps }</div>
            ))
        }
      </React.Fragment>
    );
  }

  addNewWorkout = (workout) => {
    this.setState({
      workouts: [ ...this.state.workouts, workout ]
    });
  }

  handleNextClick = () => {
    const newWorkout = this.prepareWorkout();
    this.addNewWorkout(newWorkout);
  }

  render () {
    return (
      <div className={styles['workout-container']}>
        <ScrollBox>
          { !!this.state.workouts.length &&
              <React.Fragment>
                <div className={styles.name}>STOOPID NAME</div>
                <div className={styles['text-wrapper']}>
                  { this.renderTitle() }
                  { this.renderReps() }
                </div>
              </React.Fragment>
          }
        </ScrollBox>
        <div className={styles.buttons}>
          <button onClick={this.handleNextClick}>NEXT</button>
          <button>TRY !</button>
        </div>
      </div>
    );
  }
}

export default Workout;

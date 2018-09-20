import React, { Component } from 'react';
import { buildWorkout } from './util';

class Workout extends Component {
  workout = () => buildWorkout(this.props.time);

  render () {
    const workout = this.workout();
    console.log(workout);

    return (
      <div>
        HELLO
      </div>
    );
  }
}

export default Workout;

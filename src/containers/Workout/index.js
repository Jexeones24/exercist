import React, { Component } from 'react';
import { buildWorkout } from './util';

class Workout extends Component {
  workout = () => buildWorkout(this.props.time);

  render () {
    const workout = this.workout();

    return (
      <div>
        { workout }
      </div>
    );
  }
}

export default Workout;

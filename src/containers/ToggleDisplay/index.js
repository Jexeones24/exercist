import React, { Component } from 'react';
import TimeDisplay from 'containers/TimeDisplay';
import Workout from 'containers/Workout';
import styles from './toggle-display.module.scss';

class ToggleDisplay extends Component {
  state = {
    showWorkout: false,
    time: 5
  };

  handleTimeChange = (e) => this.setState({ time: Number(e.target.value) });

  handleTimeSubmit = (e) => {
    e.preventDefault();
    this.setState({ showWorkout: true });
  }

  render () {
    const {
      showWorkout,
      time
    } = this.state;

    return (
      <div className={styles.content}>
        { showWorkout ?
            <Workout time={time} />
            :
            <TimeDisplay
              handleTimeSubmit={this.handleTimeSubmit}
              handleTimeChange={this.handleTimeChange}
              time={time}
            />
        }
      </div>
    );
  }
};

export default ToggleDisplay;

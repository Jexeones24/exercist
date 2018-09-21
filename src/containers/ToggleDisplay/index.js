import React, { Component } from 'react';
import TimeDisplay from 'containers/TimeDisplay';
import Workout from 'containers/Workout';
import styles from './toggle-display.module.scss';

class ToggleDisplay extends Component {
  state = {
    showWorkout: false,
    time: null
  };

  handleTimeChange = (e) => this.setState({ time: Number(e.target.value) });

  updateTime = (time) => {
    this.setState({ showWorkout: true, time });
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
              getTimeSubmit={this.updateTime}
              handleTimeIncrease={this.incrementTime}
              handleTimeDecrease={this.decrementTime}
            />
        }
      </div>
    );
  }
};

export default ToggleDisplay;

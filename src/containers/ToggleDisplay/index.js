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

  handleTimeSubmit = (time) => {
    this.setState({ time });
    this.toggleDisplay();
  }

  toggleDisplay = () => {
    this.setState({
      showWorkout: !this.state.showWorkout
    });
  }

  render () {
    const {
      showWorkout,
      time
    } = this.state;

    return (
      <div className={styles.content}>
        { showWorkout ?
          <Workout
            time={time}
            showTimeDisplay={this.toggleDisplay}
          />
            :
            <TimeDisplay
              getTimeSubmit={this.handleTimeSubmit}
              handleTimeIncrease={this.incrementTime}
              handleTimeDecrease={this.decrementTime}
            />
        }
      </div>
    );
  }
};

export default ToggleDisplay;

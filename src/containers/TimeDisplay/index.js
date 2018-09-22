import React, { Component } from 'react';
import styles from './time-display.module.scss';

class TimeDisplay extends Component {
  state = { value: Number(16) }

  incrementTime = (e) => (this.state.value >= 5 && this.state.value <= 44) && this.setState({ value: this.state.value + 1 });
  decrementTime = () => this.state.value > 5 && this.setState({ value: this.state.value - 1 });
  handleTimeSubmit = () => this.props.getTimeSubmit(this.state.value);

  render () {
    return (
      <div className={styles['time-display-container']}>
        <div className={styles['text-wrapper']}>
          <div className={styles.header}>Enter a desired WORKOUT TIME to begin.</div>
          <h4>10 workouts formatted within the desired time domain will be prepared.</h4>
        </div>
        <div className={styles['outer-input-wrapper']}>
          <div className={styles['input-wrapper']}>
            <div className={styles.input}>{this.state.value}</div>
            <div className={styles.submit} onClick={this.handleTimeSubmit}>GO</div>
            <div className={styles.plus} onClick={this.incrementTime}>+</div>
            <div className={styles.minus} onClick={this.decrementTime}>-</div>
          </div>
        </div>
        <div className={styles.time}>MIN: 5 min.</div>
        <div className={styles.time}>MAX: 45 min.</div>
      </div>
    );
  }
};

export default TimeDisplay;

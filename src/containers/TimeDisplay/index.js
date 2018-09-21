import React, { Component } from 'react';
import styles from './time-display.module.scss';

class TimeDisplay extends Component {
  state = { value: Number(5) }

  incrementTime = (e) => {
    if (this.state.value >= 5 && this.state.value <= 44) {
      this.setState({ value: this.state.value + 1 });
    }

    return;
  }

  decrementTime = () => {
    if (this.state.value > 5) {
      this.setState({ value: this.state.value - 1 });
    }

    return;
  }

  handleTimeSubmit = () => {
    this.props.getTimeSubmit(this.state.value);
  }

  render () {
    return (
      <div className={styles['time-display-container']}>
        <div className={styles['text-wrapper']}>
          <h3>Enter a desired WORKOUT TIME to begin.</h3>
          <h4>A workout formatted within the desired time domain will be prepared.</h4>
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

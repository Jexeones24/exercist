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
    const { handleTimeDecrease, handleTimeIncrease, handleTimeSubmit } = this.props;

    return (
      <React.Fragment>
        <h3>Enter a desired WORKOUT TIME to begin.</h3>
        <h4>A workout formatted within the desired time domain will be prepared.</h4>
        <form>
          <div className={styles['input-wrapper']}>
            <input
              type='number'
              value={this.state.value}
            />
            <div className={styles.submit} onClick={this.handleTimeSubmit}>GO</div>
            <div className={styles.plus} onClick={this.incrementTime}>+</div>
            <div className={styles.minus} onClick={this.decrementTime}>-</div>
          </div>
        </form>
        <h4>MIN: 5 min.</h4>
        <h4>MAX: 45 min.</h4>
      </React.Fragment>
    );
  }
};

export default TimeDisplay;

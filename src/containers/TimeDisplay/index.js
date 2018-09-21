import React from 'react';
import styles from './time-display.module.scss';

const TimeDisplay = ({ handleTimeChange, handleTimeSubmit, time }) => (
  <React.Fragment>
    <h3>Enter a desired WORKOUT TIME to begin.</h3>
    <h4>A workout formatted within the desired time domain will be prepared.</h4>
    <form onSubmit={handleTimeSubmit}>
      <div className={styles['input-wrapper']}>
        <input
          max={45}
          min={5}
          onChange={handleTimeChange}
          type='number'
          value={time}
        />
        <div className={styles.plus}>
          +
        </div>
        <div className={styles.minus}>
          -
        </div>
      </div>
    </form>
    <h4>MIN: 5 min.</h4>
    <h4>MAX: 45 min.</h4>
  </React.Fragment>
);

export default TimeDisplay;

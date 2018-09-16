import React, { Component } from 'react';
import styles from './toggle-display.module.scss';

class ToggleDisplay extends Component {
  state = {
    isWorkoutDisplaying: false,
    timeDomain: 5
  }

  toggle = (value) => {
    this.setState({ isWorkoutDisplaying: !this.state.isWorkoutDisplaying });
    this.updateTimeDomain(value);
  }

  updateTimeDomain = (timeDomain) => {
    this.setState({ timeDomain: Number(timeDomain) });
  }

  render () {
    const { render } = this.props;
    const { isWorkoutDisplaying, timeDomain } = this.state;

    return (
      <div className={styles['toggle-display-container']}>
        {
          render({
            isWorkoutDisplaying,
            timeDomain,
            toggle: this.toggle,
          })
        }
      </div>
    )
  }
};

export default ToggleDisplay;

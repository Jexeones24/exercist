import React, { Component } from 'react';
import ToggleDisplay from 'containers/ToggleDisplay';
import TimeDisplay from 'containers/TimeDisplay';
import WorkoutDisplay from 'containers/WorkoutDisplay';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <h1 className="App-title">APPLICATION HEADER</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleDisplay
          render={({ isWorkoutDisplaying, toggle, timeDomain }) => (
            <React.Fragment>
              { isWorkoutDisplaying ? <WorkoutDisplay timeDomain={timeDomain} /> : <TimeDisplay toggle={toggle} /> }
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default App;

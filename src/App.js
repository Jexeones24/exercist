import React, { Component } from 'react';
import Workout from 'containers/Workout';

class App extends Component {
  state = { time: 15 }

  render() {
    return (
      <div>
        <Workout time={this.state.time} />
      </div>
    );
  }
}

export default App;

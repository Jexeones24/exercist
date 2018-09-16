import React, { Component } from 'react';

class TimeDisplay extends Component {
  state = { value: 5 };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggle(this.state.value);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ENTER A TIME
            <input
              min={5}
              max={60}
              name='time'
              onChange={this.handleChange}
              type='number'
              value={this.state.value}
            />
          </label>
          <button type='submit' value='Submit'>
            GO!
          </button>
        </form>
      </div>
    );
  }
};

export default TimeDisplay;

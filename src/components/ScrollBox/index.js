import React, { Component } from 'react';

class ScrollBox extends Component {
  render () {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }
}

export default ScrollBox;

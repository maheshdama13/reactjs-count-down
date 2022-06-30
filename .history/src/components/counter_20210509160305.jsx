import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span>Hello world</span><button>Increament</button>
      </React.Fragment>
    );
  }
}

export default Counter;
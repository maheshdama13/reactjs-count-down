import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };
  
  render() {
    return (
      <React.Fragment>
        <h1>Hello world</h1><button>Increament</button>
      </React.Fragment>
    );
  }
}

export default Counter;
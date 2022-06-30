import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };

  style = {
    fontSize: 15,
    fontWeight: "bold"
  }

  let classes = "badge mt badge-";
  classes += (state.count === 0) ? 'warning' : 'primary';

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.style} className={classes}>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: 'https://picsum.photos/200'
  };

  style = {
    fontSize: 15,
    fontWeight: "bold",
    tags: ['tag1', 'tag2', 'tag3']
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.style} className={this.formatCounterClasses()}>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    );
  }

  formatCounterClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
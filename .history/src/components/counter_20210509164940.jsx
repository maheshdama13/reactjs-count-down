import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

  style = {
    fontSize: 15,
    fontWeight: "bold"
  }

  renderTags() {
    if(this.state.tags.length === 0) return <p>There are no tags</p>;

    return <ul>{this.state.tags.map(tagff => <li key={tagff}>{tagff}</li>)}</ul>;
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" />
        <span style={this.style} className={this.formatCounterClasses()}>{ this.formatCount() }</span>
        <button className="btn btn-secondary btn-sm">Increament</button> */}
        {this.state.tags.length === 0 && "Please add a new tag"}
        {this.renderTags()}
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
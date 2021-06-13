import React, { Component, Fragment } from "react";

class Counter extends Component {
  // state = {
  // 	value: this.props.counter.value,
  // };

  // handleIncrement = () => {
  // 	// this.props.value = 0;
  // 	this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }

  render() {
    console.log("counter rendered");
    // console.log(this.props);
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()} style={{ fontSize: 30 }}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h3>zero</h3> : value;
  }
}

export default Counter;

import React, { Component } from "react";
import { connect } from "react-redux";
import increaseAction from "../actions/increaseAction";
import decreaseAction from "../actions/decreaseAction";

//React
//Local State

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello",
    };
  }

  //Global State
  render() {
    return (
      <>
        Goal is to increment and decrement the global state
        <h1>{this.state.title}</h1>
        <span>{this.props.counter}</span>
        {/* //Create counter component */}
        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    );
  }
}

// mapsStateToProps

let mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

// mapDispatchToProps

// Connect component to connect mapStateToProps
// and mapDispatchToProps

let mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction()),
  };
};

export default Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

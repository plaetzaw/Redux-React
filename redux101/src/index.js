import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

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
// Dispatch

// Connect component to connect mapStateToProps
// and mapDispatchToProps

// mapsStateToProps

let mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

// mapDispatchToProps

let mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction()),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

//Redux

// Action Creators
let increaseAction = () => {
  return {
    type: "Increase",
  };
};

let decreaseAction = () => {
  return {
    type: "Decrease",
  };
};

// Reducers (state, action)
let initialState = {
  count: 0,
};
let counterReducer = (state, action) => {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case "Increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
// Create Store (pass in reducer)
let store = createStore(counterReducer);

// Wrap application inside Provider
// Pass to the provider Store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

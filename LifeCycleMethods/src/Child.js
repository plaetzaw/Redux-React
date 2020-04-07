import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("will get props");
    console.log(`${this.props.val}`);
    console.log(`${nextProps.val}`);
    let increasing = nextProps.val > this.props.val;
    this.setState(
      {
        increasing: increasing,
      },
      () => {
        console.log("state of increasing", this.state.increasing);
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val > 5;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`component Did Update prevProps: ${prevProps.val}`);
  }

  render() {
    return (
      <>
        <br />
        Child
        <br />
        {this.props.val}
      </>
    );
  }
}

export default Child;

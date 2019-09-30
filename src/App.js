import React, { Component } from "react";

const App = () => {
  return <Counter></Counter>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  render() {
    console.log("render");
    return (
      <React.Fragment>
        <div>count {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default App;

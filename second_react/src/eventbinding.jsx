// •Write a class-based component that maintains a count in its state and has an increment
// button. Ensure that the event handler is correctly bound to the class instance.
import React from "react";
class EventBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
export default EventBinding;

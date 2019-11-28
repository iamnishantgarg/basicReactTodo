import React, { Component } from "react";

export class Todoitem extends Component {
  render() {
    return <h1>{this.props.todo.title}</h1>;
  }
}

export default Todoitem;

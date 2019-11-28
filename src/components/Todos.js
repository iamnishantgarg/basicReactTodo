import React, { Component } from "react";
import Todoitem from "./Todoitem";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => {
      return <Todoitem todo={todo} />;
    });
  }
}

export default Todos;

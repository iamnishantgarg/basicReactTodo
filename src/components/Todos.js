import React, { Component } from "react";
import Todoitem from "./Todoitem";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <Todoitem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

export default Todos;

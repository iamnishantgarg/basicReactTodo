import React, { Component } from "react";

export class Todoitem extends Component {
  getStyle = todo => {
    return {
      backgroud: "#f4f4f4",
      borderBottom: "1px black solid",
      padding: "10px",
      margin: "0px 20%",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      textAlign: "center",
      textTransform: "capitalize"
    };
  };

  render() {
    const btnStyle = {
      background: "red",
      color: "fff",
      border: "none",
      padding: "5px 10px",
      borderRadius: "50%",
      float: "right",
      cursor: "pointer"
    };
    var id = this.props.todo.id,
      title = this.props.todo.title;
    return (
      <div style={this.getStyle(this.props.todo)}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          ></input>
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

export default Todoitem;

import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        style={{ display: "flex", margin: "20px 20%" }}
        onSubmit={this.onSubmit}
      >
        <input
          onChange={this.onChange}
          type="text"
          name="title"
          placeholder="Add todo.."
          value={this.state.title}
          style={{ flex: "10", padding: "10px" }}
        ></input>
        <input
          type="submit"
          className="btn"
          value="submit"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

export default AddTodo;

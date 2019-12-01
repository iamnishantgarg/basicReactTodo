import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "do the laundary",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "code for the day",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: "meeting with the mentor",
      //   completed: false
      // }
    ]
  };

  markComplete = id => {
    // console.log(`the id is:${id}`);

    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) t.completed = !t.completed;
        return t;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: this.state.todos.filter(t => {
        return t.id !== id;
      })
    });
  };

  addTodo = title => {
    console.log(title);

    this.setState({
      todos: [
        ...this.state.todos,
        { title: title, id: uuid.v4(), completed: false }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

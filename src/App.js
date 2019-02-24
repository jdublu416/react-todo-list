import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import uuid from "uuid";
// import Axios from "axios";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'walk the dog after school'
      },
      {
        id: uuid.v4(),
        title: 'empty the dishwasher'
      },
      {
        id: uuid.v4(),
        title: 'call the telephone company'
      },
    ]
    
  };

  // componentDidMount (){
  //   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res => this.setState({todos: res.data}))
  // }

  //toggle todo complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete from
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
              <AddTodo addTodo={this.addTodo} />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

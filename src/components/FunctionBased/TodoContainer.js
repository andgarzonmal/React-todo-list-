import React from "react";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import Header from './Header'
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
  
  state = {
    todos: []
   };
  
  // Mi funcion de handleChange
  // handleChange = (id) => {
  //   if(this.state.todos[id-1].completed){
  //     this.setState((prevState) => {
  //       let newState = prevState.todos[id-1].completed = false
  //       return newState
  //     })
  //   } else {this.setState((prevState) => {
  //       let newState = prevState.todos[id-1].completed = true
  //       return newState
  //     })
  //   }
  // };

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  
  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });  
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate = {this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer

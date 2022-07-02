import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
  
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
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
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange}  
          deleteTodoProps={this.delTodo} 
        />
      </div>
    )
  }
}
export default TodoContainer

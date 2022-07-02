import React, { Component } from 'react'
import TodoItem from "./TodoItem";
export default class TodosList extends Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    )
  }
}
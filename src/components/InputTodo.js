import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  }

  onChange = e => {
    this.setState({
      title: e.target.value 
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onChange} placeholder="Add todo..." value={this.state.title} />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo
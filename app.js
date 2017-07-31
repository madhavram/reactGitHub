import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value); // this. because of class component
  }
  handleChange(e) {
    this.setState({
      value : e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(value) {
    var url = "https://api.github.com/users/"+value
    console.log(value);
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

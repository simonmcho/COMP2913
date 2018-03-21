import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      description: '',
      likesReact: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: newValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input name='firstName' value={this.state.firstName} onChange={this.handleChange} />
        <input name='lastName' value={this.state.lastName} onChange={this.handleChange} />
        <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        <select name="gender" value={this.state.gender} onChange={this.handleChange}>
          <option name="male">Male</option>
          <option name="female">Female</option>
        </select>
        <input name="likesReact" type="checkbox" checked={this.state.likesReact} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;


// handle different inputs by name attribute for each input element
// handleChange(e) {
//   const inputName = event.target.name;
//   const newState = {}
//   newState[inputName] = e.target.value;
//   this.setState(newState);
//   // or
//   this.setState({ [e.target.name] : e.target.value });
// }


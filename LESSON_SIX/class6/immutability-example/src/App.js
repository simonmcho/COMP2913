import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myItems: [1,2,3,4,5] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.state.myItems.push(6);
    this.setState({ myItems: this.state.myItems.concat([6]) });
    // this.setState({ myItems: this.state.myItems });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.myItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default App;

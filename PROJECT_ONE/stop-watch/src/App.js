import React, { Component } from 'react';
import StopWatch from './components/StopWatch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Simon's Timer!</h1>
        </header>
        <p>The timer will start on page load. Please use the buttons according to your needs.</p>

        <div>
          <StopWatch />
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Images from './Components/Images';
import Scoreboard from './Components/Scoreboard';
import ResetButton from './Components/ResetButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ROCK PAPER SCISSORS GAME</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Images />
        <Scoreboard />
        <ResetButton />
      </div>
    );
  }
}

export default App;

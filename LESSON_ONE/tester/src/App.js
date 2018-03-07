import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import CurrentDate from './CurrentDate';
import './App.css';

class App extends Component {
  render() {
    const title = "WOW SIMON";
    return (
      <div className="App">
        <Header logo={logo} title={title} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CurrentDate />
      </div>
    );
  }
}

export default App;

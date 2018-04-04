import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BackBurnerContainer from './components/BackburnerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackBurnerContainer />
      </div>
    );
  }
}

export default App;

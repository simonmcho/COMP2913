import React, { Component } from 'react';
import logo from './logo.svg';

import TheApp from './js/components/App';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheApp />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherAppContainer from './components/WeatherAppContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherAppContainer />
      </div>
    );
  }
}

export default App;

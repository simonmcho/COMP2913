import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/nav-bar';
import AppSwitcher from './components/app-switcher';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="main-body">
            <NavBar />
            <AppSwitcher />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

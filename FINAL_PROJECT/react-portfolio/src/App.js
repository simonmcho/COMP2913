import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/nav-bar';
import AppSwitcher from './AppSwitcher';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="main-body">
            <NavBar />
            <AppSwitcher />
          </div>
        </Router>
    );
  }
}

export default App;

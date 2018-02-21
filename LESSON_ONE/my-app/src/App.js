import React, { Component } from 'react';
import Profile from './Profile';
import Header from './Header';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          logo={logo}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Profile 
          fullName="SIMON CHO!!" 
          imageEvo="http://i2.wp.com/s3mag.com/blog/wp-content/uploads/2016/02/s3-magazine-frs-10.jpg"
        />
      </div>
    );
  }
}

export default App;

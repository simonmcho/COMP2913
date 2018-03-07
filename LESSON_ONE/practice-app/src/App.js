import React, { Component } from 'react';

import Header from './Header';
import Product from './Product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      
  render() {
      const productName = "FX50";
      const productPrice = 25.00;

    return (
      <div className="App">
        <Header 
          logo={logo}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Product 
          productName={productName}
          productPrice={productPrice}
        />
      </div>
    );
  }
}

export default App;

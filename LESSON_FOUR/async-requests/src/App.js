import React, { Component } from 'react';
import axios from 'axios'; //need to import even tho it's a dependency
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: [],
      showSpinner: false
    }

    this.getAmericas = this.getAmericas.bind(this);
  }

  getAmericas() {
    axios.get('https://restcountries.eu/rest/v2/name/america')
      .then((res)=> {
        this.setState({
          countries: res.data,
          showSpinner: true
        });
      });
  }

  componentWillMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( (res, req)=> {
        //console.log(res);
        this.setState({
          countries: res.data,
          showSpinner: false
        })
      });
  }

  render() {
    
    const { countries, showSpinner } = this.state;
    console.log(showSpinner);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h4>
          List of countries:
        </h4>
        {
          showSpinner && <p>THIS IS A SPINNER</p>
        }
        <div>
          <button onClick={this.getAmericas}>Search for Americas</button>
        </div>
        {
          countries.map( (country)=> {
            return (
              <li key={country.alpha2Code + `-` + country.numericCode} id={country.alpha2Code + `-` + country.numericCode}>
                {country.name}
              </li>
            )
          })
        }
      </div>
    );
  }
}

export default App;

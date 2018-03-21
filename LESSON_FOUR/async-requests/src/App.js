import React, { Component } from 'react';
import axios from 'axios'; //need to import even tho it's a dependency
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: [],
      showSpinner: false,
      searchResults: "Search here",
      showFrench: false
    }

    this.getAmericas = this.getAmericas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchForCountry = this.searchForCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  getAmericas() {
    this.setState({
      showSpinner: true
    })
    axios.get('https://restcountries.eu/rest/v2/name/america')
    .then((res)=> {
      this.setState({
        countries: res.data,
        showSpinner: false
      });
    });
  }

  searchForCountry() {

    this.setState({
      showSpinner: true
    });

    const queryValue = this.state.searchResults;
    // For handling empty searches
    const apiToUse = queryValue === '' ?  `https://restcountries.eu/rest/v2/all` : `https://restcountries.eu/rest/v2/name/${queryValue}`;
    
    axios.get(apiToUse)
      .then((res) => {
        console.log("RESONLVED")
        this.setState({
          countries: res.data,
          showSpinner: false
        })
      })
      .catch((error) => {
          this.setState({
            showSpinner: false
          })
      })
  }
  
  handleChange(event) {

    const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: newValue
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.handleChange(event);
  }
  
  componentWillMount() {
    console.log("COMPONENAT MOUNTING")
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( (res, req)=> {
        console.log(res.data);
        this.setState({
          countries: res.data
        })
      });
  }

  render() {
    
    const { countries, showSpinner } = this.state;
    
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
        <form onSubmit={this.handleSubmit}>
          <input name="searchResults" value={this.state.searchResults} onChange={this.handleChange} />
          <button type="submit" onClick={this.searchForCountry}>Search!</button>
        </form>
        <input name="showFrench" type="checkbox" checked={this.state.showFrench} onChange={this.handleChange}/>
        {
          countries.map( (country)=> {

            

            return (
              <li key={country.alpha2Code + `-` + country.numericCode} id={country.alpha2Code + `-` + country.numericCode}>
                {
                  this.state.showFrench ? country.translations.fr : country.name
                }
              </li>
            )
          })
        }
      </div>
    );
  }
}

export default App;

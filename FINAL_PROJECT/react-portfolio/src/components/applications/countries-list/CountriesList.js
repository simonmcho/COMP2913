import React, { Component } from 'react';
import axios from 'axios'; 

class CountriesList extends Component {
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
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus() {
    
    this.state.searchResults === "Search here" &&
    this.setState({
      searchResults : ''
    });

  }

  handleBlur() {

    this.state.searchResults === '' &&
    this.setState({
      searchResults : "Search here"
    });
    
  }
  
  componentWillMount() {
    this.props.onFetchAllCountries();
    // axios.get('https://restcountries.eu/rest/v2/all')
    //   .then( (res, req)=> {
    
    //     this.setState({
    //       countries: res.data
    //     });

    //   });
  }

  render() {
    
    const { countries, showSpinner } = this.state;
    console.log(this.props.allCountries);
    return (
      <div>
        <h4>
          List of countries:
        </h4>
        {
          showSpinner && <p>THIS IS A SPINNER</p>
        }
        <form onSubmit={this.handleSubmit}>
          <input 
            name="searchResults" 
            value={this.state.searchResults} 
            onChange={this.handleChange}
            onFocus={this.handleFocus} 
            onBlur={this.handleBlur}
          />
          <button type="submit" onClick={this.searchForCountry}>Search!</button>
        </form>
        {
          this.props.allCountries.map( country => {
              return (
                <li key={country.alpha2Code + `-` + country.numericCode} id={country.alpha2Code + `-` + country.numericCode}>
                  {
                    country.name
                  }
                </li>
              )
          })
        }
        {/* <div style={{ marginBottom: '20px' }}>
          <input 
            name="showFrench" 
            type="checkbox" 
            checked={this.state.showFrench} 
            onChange={this.handleChange}
            /> 
          <p style={{ display: 'inline', fontStyle : 'oblique' }} >Show French</p>
        </div> */}
        {/* {
          countries.map( (country)=> {
            return (
              <li key={country.alpha2Code + `-` + country.numericCode} id={country.alpha2Code + `-` + country.numericCode}>
                {
                  this.state.showFrench ? country.translations.fr : country.name
                }
              </li>
            )
          })
        } */}
      </div>
    );
  }
}

export default CountriesList;

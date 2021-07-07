import React, { Component } from 'react';
import axios from 'axios';

class CountriesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            searchResults: "Search here"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchForCountry = this.searchForCountry.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.handleChange(e);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleFocus() {
        const currentValue = this.state.searchResults;

        currentValue === "Search here" &&

        this.setState({
            searchResults: ''
        })
    }

    handleBlur() {
        const currentValue = this.state.searchResults;

        currentValue === '' && 

        this.setState({
            searchResults: "Search here"
        })
    }

    searchForCountry() {
        const queryValue = this.state.searchResults;
        const apiToUse = 
                queryValue === '' ?  `https://restcountries.eu/rest/v2/all` 
                                  : `https://restcountries.eu/rest/v2/name/${queryValue}`;
        
        // API call to get countries
        axios.get(apiToUse)
                .then( response => {
                    this.setState({
                        countries: response.data
                    });
                })
                .catch( error => {
                    console.log("ERROR@!!!!!");
                });
    }

    render() {

        const { countries } = this.state;

        return (
            <div className="countries-list-app">
                <h3>
                    List of countries
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <input name="searchResults" 
                           value={this.state.searchResults} 
                           onChange={this.handleChange} 
                           onFocus={this.handleFocus}
                           onBlur={this.handleBlur}
                           />
                    <button type="submit" onClick={this.searchForCountry}>Search!</button>
                </form>
                {
                    countries.map( country => {

                        return (
                            <li key={country.alpha2Code + '-' + country.numericCode}>
                                {
                                    country.name
                                }
                            </li>
                        )

                    })
                }

            </div>
        )
    }
}

export default CountriesList;
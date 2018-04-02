import React, { Component } from 'react';
import axios from 'axios';

import WeatherStatus from '../components/WeatherStatus';
import SameRequest from '../components/SameRequest';
import BadRequest from '../components/BadRequest';

class WeatherApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCity: '',
            value : 'vancouver',
            isGoodRequest: true,
            errorMessage: '',
            requestMade: true,
            weatherState: {
                location: '',
                forecast: '',
                temperature: '',
                conditionCode: '3200'
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertToCelsius = this.convertToCelsius.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    // Function to change city for state
    changeCity(e) {
        this.setState({
            value: e.target.value
        });
    }

    // Function to convert farenheit to celsius
    convertToCelsius(temperature) {
        return Math.round((temperature - 32) * (5/9));
    }

    handleSubmit(e) {
        e.preventDefault();

        const { currentCity, value } = this.state;

        // Prevent HTTP request if city is already selected, using state instead of HTML element text values
        if(currentCity !== value) {

            const requestParam = `https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${value}")`;

            axios.get(requestParam)
                    .then((response) => {
                        const apiResponse = JSON.parse(response.request.response);
                        const weatherResults = apiResponse.query.results.channel; 

                        // Values for DOM
                        const currentLocation = `${weatherResults.location.city}, ${weatherResults.location.region} - ${weatherResults.location.country}`;
                        const currentForecast = weatherResults.item.condition.text;
                        const nextForecast = weatherResults.item.forecast;
                        const currentTemperature = `${this.convertToCelsius(weatherResults.item.condition.temp)}°C`;
                        const currentCode = weatherResults.item.condition.code;

                        // Set state with updated values
                        this.setState({
                            requestMade: true,
                            currentCity: value,
                            weatherState : {
                                location: currentLocation,
                                forecast: currentForecast,
                                nextForecast: nextForecast,
                                temperature: currentTemperature,
                                conditionCode: currentCode
                            }
                        });
                    })
                    .catch((error) => { // Error handling
                        
                        const message = `${error}`;

                        this.setState({
                            isGoodRequest: false,
                            errorMessage: message
                        })
                    });
        } else {
            // Set boolean value of requestMade to false
            this.setState({
                requestMade: false
            })
        }
    }

    render() {

        // Declare and assign variables
        const { requestMade, isGoodRequest, errorMessage, weatherState } = this.state;
        const showWeather = weatherState.foreCast !== '' && weatherState.temperature !== '';
        
        return (
            <div style={{ maxWidth: '50%', margin: '0 auto', marginTop: '25px' }}>
                <h2 style={{ textAlign: 'center' }}>Get Weather Status from these 5 cities!</h2>
                <div style={{ textAlign: 'center' }} >
                    <form onSubmit={this.handleSubmit}>
                        <select value={this.state.value} onChange={this.changeCity}>
                            <option value="vancouver">Vancouver, B.C.</option>
                            <option value="miami">Miami, Florida</option>
                            <option value="berlin">Berlin, Germany</option>
                            <option value="suva">Suva, Fiji Islands</option>
                            <option value="dar es salaam">Dar es Salaam, Tanzania</option>
                        </select>
                        <input type="submit" value="Get Weather!" />
                    </form>
                </div>
                {
                    !requestMade && 
                    <SameRequest />
                }
                {
                    isGoodRequest ?
                        <WeatherStatus 
                            currentCity={this.state.currentCity}
                            currentLocation={weatherState.location}
                            showWeather={showWeather}
                            forecast={weatherState.forecast}
                            nextForecast={weatherState.nextForecast}
                            temperature={weatherState.temperature}
                            conditionCode={weatherState.conditionCode}
                            convertToCelsius={this.convertToCelsius}
                        />
                        :
                        <BadRequest errorMessage={errorMessage}/>
                }
            </div>
        )
    }
}

export default WeatherApp;
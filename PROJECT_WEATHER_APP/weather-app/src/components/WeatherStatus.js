import React, { Component } from 'react';
import WeatherIcon from 'react-icons-weather';

// Displays weather status
class WeatherStatus extends Component {
    constructor(props) {
        super(props);

        this.reorderText = this.reorderText.bind(this);
    }

    // Function to reorder date text that came in from Yahoo API
    reorderText(textArray, firstElement, secondElement) {
        const tempFirstElement = textArray[firstElement];
        textArray[firstElement] = textArray[secondElement];
        textArray[secondElement] = tempFirstElement;

        return textArray;
    }

    render() {
    
        return (
            <div className="weather-status" style={{ textAlign: 'center' }}>
                <h3 value={this.props.currentCity}>{this.props.currentLocation !== '' ? this.props.currentLocation : "Location"}</h3>
                {
                    this.props.showWeather && 
                    <div>
                        <p style={{ display: 'inline-block', marginTop: '0' }}>
                            {this.props.forecast}, {this.props.temperature}
                        </p>
                        <WeatherIcon name="yahoo" iconId={this.props.conditionCode} flip="horizontal" rotate="90" style={{ marginLeft: '20px' }}/>
                    </div>
                }     
                {
                    // Iterate through next forecast up to 5 days
                    this.props.showWeather &&
                    this.props.nextForecast.map( (forecast, index) => {
                        
                        if(index > 0 && index <= 5) {
                            const dateArray = forecast.date.split(' ').splice(0, 2); // Rearrange the api response date text
                            const rearrangedDate = this.reorderText(dateArray, 0, 1).join(' '); // Assign with rearranged date text

                            const lowTemp = `↓${this.props.convertToCelsius(forecast.low)}°C`;
                            const highTemp = `↑${this.props.convertToCelsius(forecast.high)}°C`;


                            return (
                                <li key={rearrangedDate} style={{ listStyle : 'none', color: '#7e7e7e' }}>
                                     {rearrangedDate} - {forecast.text}, {lowTemp}, {highTemp} <WeatherIcon name="yahoo" iconId={forecast.code} flip="horizontal" rotate="90" style={{ marginLeft: '5px' }}/>
                                </li>
                            )
                        }

                    })
                }

            </div>
        )
    }
}

export default WeatherStatus;
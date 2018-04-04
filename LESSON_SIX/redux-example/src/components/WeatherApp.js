import React, { Component } from 'react';
import axios from 'axios';

class WeatherApp extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.onFetchWeather();
    }

    handleClick() {
        console.log("CLICKED")
        this.props.onClickReset();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>WeatherApp</p>
                <ul>
                {
                    this.props.weatherForecast.map(forecast => {
                        return (
                            <li key={forecast.date}>
                                {forecast.date}
                                {forecast.text}
                            </li>
                        )
                    })
                }
                </ul>
                <button onClick={this.handleClick}>Reset</button>
            </div>
        )
    }
}

export default WeatherApp;
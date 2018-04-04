import React, { Component } from 'react';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.onFetchWeather();
  }

  handleClick() {
    this.props.onClickReset();
  }

  render() {
    if (this.props.isLoading) return (
      <div>Loading</div>
    );
    return (
      <div>
        weather app
        <ul>
          {this.props.weatherForecast.map((forecast) => (
            <li key={forecast.date}>
              {forecast.date}
              {forecast.text}
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Reset</button>
      </div>
    );
  }
}

export default WeatherApp;

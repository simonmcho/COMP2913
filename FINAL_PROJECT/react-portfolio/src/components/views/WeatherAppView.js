import React from 'react';

import WeatherApp from '../applications/weather-app/WeatherApp';

class WeatherAppView extends React.Component {

  render() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Weather App</h2>
            <WeatherApp />
        </div>
    );
  }

}

export default WeatherAppView;

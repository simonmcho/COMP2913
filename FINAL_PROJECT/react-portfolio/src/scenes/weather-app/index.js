import React from 'react';

import WeatherApp from './components/WeatherApp';

class WeatherAppScene extends React.Component {

  render() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Weather App</h2>
            <WeatherApp />
        </div>
    );
  }

}

export default WeatherAppScene;

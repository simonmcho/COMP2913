import axios from 'axios';

export default {
  fetchWeatherForecast(dispatch) {
    dispatch({ type: 'WEATHER_FORECAST_FETCH_PENDING' });
    axios.get('https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="vancouver, bc")')
      .then(
        (response) => {
          const forecast = response.data.query.results.channel.item.forecast;
          dispatch({
            type: 'WEATHER_FORECAST_FETCH_SUCCESS',
            forecast: forecast
          });
        }
      );
  },
  clearWeatherForecast(dispatch) {
    dispatch({
      type: 'WEATHER_FORECAST_CLEAR'
    })
  }
};

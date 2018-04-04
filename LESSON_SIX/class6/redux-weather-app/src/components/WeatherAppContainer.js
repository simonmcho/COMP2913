import { connect } from 'react-redux';
import WeatherApp from './WeatherApp';
import WeatherActions from '../actions/weather-actions';

const mapStateToProps = (state, ownProps) => ({
  weatherForecast: state.forecast,
  isLoading: state.isLoading
})
 
const mapDispatchToProps = (dispatch, ownProps) => ({
  onFetchWeather: () => WeatherActions.fetchWeatherForecast(dispatch),
  onClickReset: () => WeatherActions.clearWeatherForecast(dispatch)
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherApp);

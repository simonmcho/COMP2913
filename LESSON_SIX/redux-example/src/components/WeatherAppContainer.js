import { connect } from 'react-redux';
import WeatherApp from './WeatherApp';

import WeatherActions from '../actions/weather-actions.js';

const mapStateToProps = (state, ownProps) => ({ // comes from reducer
    weatherForecast: state.forecast //[] 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFetchWeather: ()=> WeatherActions.fetchWeatherForecast(dispatch),
    onClickReset: () => WeatherActions.clearWeatherForecast(dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherApp);
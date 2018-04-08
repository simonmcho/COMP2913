import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import HomeView from '../views/HomeView';
import CountriesList from '../views/CountriesList';
import StopWatch from '../views/StopWatch';
import WeatherApp from '../views/WeatherApp';

class AppSwitcher extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={HomeView} />
                <Route path="/countries-list" component={CountriesList} />
                <Route path="/stop-watch" component={StopWatch} />
                <Route path="/weather-app" component={WeatherApp} />
            </Switch>
        )
    }
}

export default AppSwitcher;
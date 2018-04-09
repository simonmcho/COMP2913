import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import HomeView from '../views/HomeView';
import CountriesList from '../views/CountriesList';
import StopWatch from '../views/StopWatch';
import WeatherApp from '../views/WeatherApp';
import NotFound from '../views/NotFound';

class AppSwitcher extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomeView} />
                <Route path="/countries-list" exact component={CountriesList} />
                <Route path="/stop-watch" exact component={StopWatch} />
                <Route path="/weather-app" exact component={WeatherApp} />
                <Route exact component={NotFound} />
            </Switch>
        )
    }
}

export default AppSwitcher;
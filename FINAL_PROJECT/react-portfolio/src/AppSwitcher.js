import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import HomeScene from './scenes/home';
import CountriesListScene from './scenes/countries-list';
import StopWatchScene from './scenes/stop-watch';
import WeatherAppScene from './scenes/weather-app';
import NotFoundScene from './scenes/NotFoundScene.js';

class AppSwitcher extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomeScene} />
                <Route path="/countries-list" exact component={CountriesListScene} />
                <Route path="/stop-watch" exact component={StopWatchScene} />
                <Route path="/weather-app" exact component={WeatherAppScene} />
                <Route exact component={NotFoundScene} />
            </Switch>
        )
    }
}

export default AppSwitcher;
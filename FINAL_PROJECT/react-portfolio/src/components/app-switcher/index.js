import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import HomeView from '../views/HomeView';
import CountriesListView from '../views/CountriesListView';
import StopWatchView from '../views/StopWatchView';
import WeatherAppView from '../views/WeatherAppView';
import NotFoundView from '../views/NotFoundView';

class AppSwitcher extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomeView} />
                <Route path="/countries-list" exact component={CountriesListView} />
                <Route path="/stop-watch" exact component={StopWatchView} />
                <Route path="/weather-app" exact component={WeatherAppView} />
                <Route exact component={NotFoundView} />
            </Switch>
        )
    }
}

export default AppSwitcher;
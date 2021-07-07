import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from 'react-router-dom';

import RockPaperScissors from '../components/RockPaperScissors';
import CountriesList from '../components/CountriesList';

class NavBar extends Component {

    render() {
        return (
            <Router>
                <div className="nav-bar">
                    <ul>
                        <li>
                            <Link to='/rock-paper-scissors'>Rock Paper Scissors Game</Link>
                        </li>
                        <li>
                            <Link to='/countries-list'>Countries List</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/rock-paper-scissors' component={RockPaperScissors} />
                        <Route path='/countries-list' component={CountriesList} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default NavBar;
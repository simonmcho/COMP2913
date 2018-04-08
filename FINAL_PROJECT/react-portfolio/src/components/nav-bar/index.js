import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/countries-list">Countries Search App</Link>
                    </li>
                    <li>
                        <Link to="/stop-watch">Stop Watch App</Link>
                    </li>
                    <li>
                        <Link to="/weather-app">Weather App</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
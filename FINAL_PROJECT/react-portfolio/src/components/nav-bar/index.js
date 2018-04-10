import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink 
                        to="/" 
                        exact 
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                           }}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/countries-list"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                           }}
                        >Countries Search App</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/stop-watch"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                           }}
                           >Stop Watch App</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/weather-app"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'green'
                           }}
                           >Weather App</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
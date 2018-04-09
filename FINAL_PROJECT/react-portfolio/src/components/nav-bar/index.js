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
                        onlyActiveOnIndex
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                           }}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/countries-list"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                           }}
                        >Countries Search App</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/stop-watch"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                           }}
                           >Stop Watch App</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/weather-app"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                           }}
                           >Weather App</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
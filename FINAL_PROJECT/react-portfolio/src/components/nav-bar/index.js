import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {


    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <ul>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <NavLink to="/" 
                                 exact 
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>
                        Home
                        </NavLink>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <NavLink to="/countries-list"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>
                        Countries Search App
                        </NavLink>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <NavLink to="/stop-watch"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>
                        Stop Watch App
                        </NavLink>
                    </li>
                    <li style={{ display: 'inline', marginRight: '10px' }}>
                        <NavLink to="/weather-app"
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>
                        Weather App
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
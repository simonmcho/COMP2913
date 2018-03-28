import React, { Component } from 'react';
import {
    BrowserRouter as Router, // it's taking BrowserRouter from lib and renaming it as Router
    Switch,
    Route,
    Link
} from 'react-router-dom'; 
import DogView from './DogView';

// We have access to this.props.match because this component is rendered under Routes
class Dogs extends Component {
  render() {
    return (
        <div>
            <p>This is the Dogs view</p>

            <ul>
                <li>
                    <Link to={ `${this.props.match.url}/chiuhaha`}>Chihuahah</Link>
                </li>
                <li>
                    <Link to={ `${this.props.match.url}/labrador`}>Labrador</Link>
                </li>
            </ul>
            <Route path={`${this.props.match.url}/chiuhaha`} component={DogView} />
            <Route path={`${this.props.match.url}/:breed`} component={DogView} />
        </div>
    );
  }
}

export default Dogs;

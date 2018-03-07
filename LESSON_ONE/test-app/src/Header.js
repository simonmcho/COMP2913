import React, { Component } from 'react';

class Header extends Component {
    render() {
        const welcome = "Welcome to Simon's Test React App!";

        return(
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" style={{ width: '50px'}}/>
                <h1 className="App-title">{welcome}</h1>
            </header>
        )
    }
}

export default Header;
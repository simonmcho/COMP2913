import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false
    }

    this.loginToAccount = this.loginToAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  loginToAccount() {
    this.setState({
      isLoggedIn : true
    });
  }

  logout() {
    this.setState({
      isLoggedIn : false
    });
  }

  componentDidMount() {
    console.log('component mounted!')
  }

  // render() {
  //   if(this.state.isLoggedIn) {
  //     return (
  //       <div>
  //         <h3>TITLE</h3>
  //         <p>Welcome!</p>
  //         <button onClick={this.logout}>Logout</button>
  //         <div>By Simon</div>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <h3>TITLE</h3>
  //         <button onClick={this.loginToAccount}>Login</button>
  //         <div>By Simon</div>
  //       </div>
  //     )
  //   }
    
  // }


  render() {

    let myView;

    if(this.state.isLoggedIn) {
      myView =  (
                  <div>
                    <p>LOGGED IN!</p>
                    <button onClick={this.logout}>Logout</button>
                  </div>
                );
    } else {
      myView = (
        <div>
          <p>Please Log In...</p>
          <button onClick={this.loginToAccount}>Login</button>
        </div>
      );
    }

    return (
      <div>
        <h3>Conditional App</h3>
          {this.state.isLoggedIn ? (
            <div>
            <p>LOGGED IN!</p>
            <button onClick={this.logout}>Logout</button>
          </div>
          ): (
            <div>
            <p>Please Log In...</p>
            <button onClick={this.loginToAccount}>Login</button>
          </div>
          )}
          {
            this.state.isLoggedIn && (
              <div>By Simon</div>
            )
          }
      </div>
    )
  }
}

export default App;

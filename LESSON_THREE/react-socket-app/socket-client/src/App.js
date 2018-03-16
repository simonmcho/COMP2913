import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super();

    const localMachineIP = `127.0.0.1`;
    const endpoint = `http://${localMachineIP}:4001`;//this is where we connet to with socket
    
    // Check for any sockets within render method - the render is run often so we need the socket
    //const socket = socketIOClient(endpoint);

    this.state = {
      color: '#fff',
      endpoint: endpoint
    }

    this.send = this.send.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);

    // Below emits an event to the socket (your server)with argument of red
    console.log("WHEN SEND METHOD CALLED, CURRENT COLOR IS: " + this.state.color);
    socket.emit('change color', this.state.color); // this can have multiple arguments, like 'red', 'yellow', etc
  }

  setColor = newColor => {
    console.log("ENTERED setColor method");
    this.setState({ color: newColor });
  }

  // componentDidUpdate() {
  //   console.log(this.state.color);
  // }
  
  /*****************RENDER HERE *****************************/
  render() {


    // Check for any sockets within render method - the render is run often so we need the socket
    // Bad idea tgo create an instance of socket everytime it renders
    const socket = socketIOClient(this.state.endpoint);

    // Essentially an event listener from the server
    // Looking for event called 'change color'
    // socket.on takes a callback function for the first argument
    socket.on('change color', newColor => {
      console.log("LISTENING ON SOCKET UPON RENDER")
      document.body.style.backgroundColor = newColor;

    });


    const tempContent = (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>CHANGE BODY COLOR!</button>
        <button id="blue" onClick={ () => this.setColor('blue')}>BLUE</button>
        <button id="red" onClick={ () => this.setColor('red')}>RED</button>
      </div>
    )

    return (
      <div className="main-app">
        {tempContent}
      </div>
    )
  }


}

export default App;
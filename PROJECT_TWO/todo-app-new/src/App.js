import React, { Component } from 'react';
import TaskList from './components/TaskList';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }
  }

  render() {
    return (
      <div className="App">
       <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

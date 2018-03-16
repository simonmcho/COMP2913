import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      listPopulated: false,
      taskHeader: ''
    }

    this.addTaskToList = this.addTaskToList.bind(this);
  }

  addTaskToList (newTask) {
    //console.log(newTask);

    this.setState({
      taskHeader: newTask,
      listPopulated: true
    });
  }

  render() {
    return (
      <div className="App">
        <AddTask addTask={this.addTaskToList}/>
        <div style={{ marginTop: "25px"}}>
          <div style={{ borderBottom: "1px solid black", width: "25%", margin: "0 auto" }}>
            <h4>To Do List:</h4>
          </div>
          <ol>
            {
              this.state.listPopulated && <li>{this.state.taskHeader}</li>
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default App;

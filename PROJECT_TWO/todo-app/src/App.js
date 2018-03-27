import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      tasks: []
    }

    this.addOneTask = this.addOneTask.bind(this);
    this.removeOneTask = this.removeOneTask.bind(this);
  }

  // Receive task value from AddTask and update state with new list of tasks
  addOneTask(taskHeader) {
    const { tasks } = this.state;

    let updatedTaskList = tasks;

    updatedTaskList.push(taskHeader);
    
    this.setState({
      tasks: updatedTaskList
    });
  }

  // Receive task value to remove and update state with new list of tasks
  removeOneTask(taskHeader) {
    const { tasks } = this.state;
  
    const updatedTaskList = tasks.filter( task => {
      
      const theKey = Object.keys(task); // Get key value to remove corresponding value
  
      return task[theKey] !== taskHeader // Easier to read rather than single line syntax
    
    });

    // Allow a bit of time before removing for user - can maybe add a "Removing" spinner, but annoying
    setTimeout( ()=> {
      
      this.setState({
        tasks: updatedTaskList
      });

    }, 200);

  }

  render() {
    const { tasks } = this.state;
    
    return (
      <div className="App">
        <AddTask addTaskToList={this.addOneTask} />
        <TaskList theList={tasks} removeTaskFromList={this.removeOneTask}/>
      </div>
    );
  }
}

export default App;

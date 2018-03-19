import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      taskHeader: []
    }

    this.addTaskToList = this.addTaskToList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  // Add a task to To Do List
  addTaskToList (newTask) {
    const { taskHeader } =  this.state;
    const lengthOfTasks = taskHeader.length;

    taskHeader.push(
      <li key={newTask + "-" + lengthOfTasks} style={{ position: 'relative', marginTop: '5px' }}>
        <input type="checkbox" 
               id={newTask + "-" + lengthOfTasks} 
               onClick={ 
                () => { 
                  this.removeTask(newTask + "-" + lengthOfTasks) 
                }
                } 
                style={{
                  width: "10px",
                  verticalAlign: "middle"
                }}
        />
        <label 
          key={newTask + "-" + lengthOfTasks} 
          htmlFor={newTask + "-" + lengthOfTasks}
          style={{ width: '50%', position: 'relative', display: 'inline-block', verticalAlign: 'top', textAlign: 'left', marginLeft: '5px'}}
        >
          {newTask}
        </label>
      </li>
    )

    this.setState({
      taskHeader: taskHeader
    });
  }

  // Remove a task from the To Do List
  removeTask(taskToRemove) {
    
    const { taskHeader } = this.state;

    // Return any items that do not match the selected task
    const updatedTasks = taskHeader.filter( task => {

      return task.key !== taskToRemove ? task : null

    });
    
    this.setState({
      taskHeader: updatedTasks
    })

  }

  render() {
    
    const { taskHeader } = this.state;

    return (
      <div className="App">
        <AddTask addTask={this.addTaskToList}/>
        <div style={{ marginTop: "25px"}}>
          <div style={{ borderBottom: "1px solid black", width: "25%", margin: "0 auto", marginBottom: '15px'}}>
            <h4>To Do List:</h4>
          </div>
          <ul style={{ padding: '0', width: '15%', margin: '0 auto', listStyle: 'none' }}>
            {
              taskHeader.map( (task, index) => {
                return (
                  task
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

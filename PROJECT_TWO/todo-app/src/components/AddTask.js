import React, { Component } from 'react';
import '../styles/sass/AddTask.scss';

class AddTask extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            taskHeader: {}
        }

        this.updateTask = this.updateTask.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Get value from the target input and update this state with an object,
    // Object contains target value and random number for key
    updateTask(e) {
        const taskValue = e.target.value;
        const keyForTask = Math.round(Math.random() * Math.floor(999999));

        const updatedTask = {};
        
        updatedTask[keyForTask] = taskValue; 

        this.setState({
            [e.target.name]: updatedTask
        });

    }

    // If the object is not empty, pass the task value up to parent using the CB function
    handleClick() {
        const { taskHeader } = this.state;
        //console.log(taskHeader);
        (Object.keys(taskHeader).length !== 0 && taskHeader.constructor === Object) && this.props.addTaskToList(taskHeader);

        this.setState({
            taskHeader: {}
        })
    }

    // Handle form submission by calling handleClick()
    handleSubmit(e) {
        e.preventDefault();
        
        this.handleClick();
    }

    render() {

        const theKey = Object.keys(this.state.taskHeader) 
        const inputValue = this.state.taskHeader[theKey] == null ? '' : this.state.taskHeader[theKey];

        return (
            <div className="add-task-container">
                <div className="add-task-header">
                    <span >Type in a task: </span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='taskHeader' value={inputValue} onChange={this.updateTask}/>
                    <button type="button" onClick={ this.handleClick }>Add Task</button>
                </form>
            </div>
        )
    }
}

export default AddTask;
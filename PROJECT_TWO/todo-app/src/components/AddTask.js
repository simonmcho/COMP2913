import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            taskHeader: ''
        }

        this.getTask = this.getTask.bind(this);
    }

    getTask() {
        this.props.addTask(this.state.taskHeader);
    }

    getUserInputForTaskHeader(event) {
        this.setState({
            taskHeader: event.target.value
        });
    }

    render() {
        return (
            <div>
                <span>Type in a task: </span>
                <input type="text" value={this.state.taskHeader} onChange={ newTaskHeader => this.getUserInputForTaskHeader(newTaskHeader) }/>
                <button type="button" onClick={ this.getTask }>Add Task</button>
            </div>
        )
    }
}

export default AddTask;
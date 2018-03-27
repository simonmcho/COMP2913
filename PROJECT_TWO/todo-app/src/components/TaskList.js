import React, { Component } from 'react';
import '../styles/sass/TaskList.scss';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.removeTask = this.removeTask.bind(this);
    }

    // Pass target value to the parent using the CB function
    removeTask(e) {
        const taskToRemove = e.target.value;

        this.props.removeTaskFromList(taskToRemove);
    }

    render() {

        const tasks = this.props.theList;
        
        return (
            <div className="task-list">
                <div className="task-list-header">
                    <h4>To Do List:</h4>
                </div>
                <ul className="task-list-items">
                {
                    tasks.map( (task, index) => {

                        const theKey = Object.keys(task);
                        const taskheader = task[theKey];

                        const taskFormatted = 

                            <li key={theKey}>
                                <input 
                                    value={taskheader} 
                                    type="checkbox" 
                                    onClick={this.removeTask}  
                                />
                                <label>
                                    {taskheader}
                                </label>
                            </li>;
                        
                        return (taskFormatted)
                    })
                }
                </ul>
            </div>
        )
    }

}

export default TaskList;
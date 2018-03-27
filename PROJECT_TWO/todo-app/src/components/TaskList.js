import React, { Component } from 'react';

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
            <div style={{ marginTop: "25px"}}>
                <div style={{ borderBottom: "1px solid black", width: "25%", margin: "0 auto", marginBottom: '15px'}}>
                    <h4>To Do List:</h4>
                </div>
                <ul style={{ padding: '0', width: '15%', margin: '0 auto', listStyle: 'none' }}>
                {
                    tasks.map( (task, index) => {

                        const theKey = Object.keys(task);
                        const taskheader = task[theKey];

                        const taskFormatted = 

                            <li key={theKey} style={{ margin: '0 auto', marginTop: '5px' }}>
                                <input 
                                    value={taskheader} 
                                    type="checkbox" 
                                    onClick={this.removeTask} 
                                    style={{ width: "10px", verticalAlign: "middle" }} 
                                />
                                <label style={{ 
                                                width: '50%', 
                                                position: 'relative', 
                                                display: 'inline-block', 
                                                verticalAlign: 'top', 
                                                textAlign: 'center'
                                              }}>
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
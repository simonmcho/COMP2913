import React, { Component } from 'react';
import AddTask from '../components/AddTask.js';

class TaskList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [<AddTask />]
        }
    }
    
    render() {
        return (
            <div>
                <div style={{ borderBottom: "1px solid black", width: "25%", margin: "0 auto", marginBottom: '15px'}}>
                    <h4>To Do List:</h4>
                </div>  
                <ul style={{ padding: '0', width: '15%', margin: '0 auto', listStyle: 'none' }}>
                {   


                    this.state.tasks.map( (task, index) => {
                        return (task)
                    })
                }
                </ul>
            </div>
        )
    }

}

export default TaskList;
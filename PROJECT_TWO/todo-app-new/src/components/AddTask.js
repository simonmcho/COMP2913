import React from 'react';

class AddTask extends React.Component {

    render() {
        return (
            <div>
                {/* <span>Type in a task: </span> */}
                <input type="text" />
                <button type="button" >Add Task</button>
            </div>
        )
    }

}

export default AddTask;
import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ marginTop: "25px"}}>
                <div style={{ borderBottom: "1px solid black", width: "25%", margin: "0 auto", marginBottom: '15px'}}>
                    <h4>To Do List:</h4>
                </div>
                <ul style={{ padding: '0', width: '15%', margin: '0 auto', listStyle: 'none' }}>
                {
                    taskHeader.map( (task, index) => {
                        return (task)
                    })
                }
                </ul>
            </div>
        )
    }

}

export default List;
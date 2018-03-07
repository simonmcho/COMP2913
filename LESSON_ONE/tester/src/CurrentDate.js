import React, { Component } from 'react';

class CurrentDate extends Component {
    constructor(props) {
        super(props);

        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <p>Current Date: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default CurrentDate;
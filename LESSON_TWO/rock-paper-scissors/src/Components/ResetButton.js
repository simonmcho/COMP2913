import React, { Component } from 'react';

class ResetButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <button type="button" onClick={this.props.reset} >Reset Game</button>
            </div>
        )
    }
}

export default ResetButton;
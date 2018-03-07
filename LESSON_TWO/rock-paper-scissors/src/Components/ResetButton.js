import React, { Component } from 'react';

class ResetButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {
       // this.props.onClick();

        return (
            <div>
                <button type="button" onClick={this.props.onClick}>Reset Game</button>
            </div>
        )
    }
}

export default ResetButton;
import React, { Component } from 'react';

class ResetButton extends Component {
    constructor(props) {
        super(props);

        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        const newGame = {
            user: 0,
            computer: 0
        }

        this.props.onClick(newGame);
        
    }

    render() {
       // this.props.onClick();

        return (
            <div>
                <button type="button">Reset Game</button>
            </div>
        )
    }
}

export default ResetButton;
import React, { Component } from 'react';

class Scoreboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userScore: 0,
            computerScore: 0
        }
    }

    updateScore() {

        const updatedScore = this.props.score;

        this.state.userScore = updatedScore.user;
        this.state.computerScore = updatedScore.computer;

    }

    render() {

        this.updateScore();

        return (
            <div>
                <div>
                    <span>Player Score: <p style={{ display: "inline-block" }}>{this.state.userScore}</p></span>
                </div>
                <div>
                    <span>Computer Score: <p style={{ display: "inline-block" }}>{this.state.computerScore}</p></span>
                </div>
            </div>
        )
        
    }
}

export default Scoreboard;
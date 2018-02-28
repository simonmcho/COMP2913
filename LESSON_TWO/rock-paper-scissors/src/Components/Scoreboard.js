import React, { Component } from 'react';

class Scoreboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerScore: 0,
            computerScore: 0
        }
    }

    render() {
        
        return (
            <div>
                <div>
                    <span>Player Score: <p style={{ display: "inline-block" }}>{this.state.playerScore}</p></span>
                </div>
                <div>
                    <span>Computer Score: <p style={{ display: "inline-block" }}>{this.state.computerScore}</p></span>
                </div>
            </div>
        )
        
    }
}

export default Scoreboard;
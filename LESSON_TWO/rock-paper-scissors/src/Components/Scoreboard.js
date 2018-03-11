import React, { Component } from 'react';

class Scoreboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userScore: this.props.score.user,
            computerScore: this.props.score.computer
        }
    }

    
    componentDidUpdate() {

        if(this.state.userScore !== this.props.score.user || this.state.computerScore !== this.props.score.computer) {
            
            this.setState({
                userScore: this.props.score.user,
                computerScore: this.props.score.computer
            })

        }
    }

    render() {

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
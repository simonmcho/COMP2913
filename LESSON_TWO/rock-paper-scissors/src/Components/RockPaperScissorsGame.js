import React, { Component } from 'react'; 
import Images from './Images';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';

class RockPaperScissorsGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theData: null,
            scores: {
                user: 0,
                computer: 0
            }
        }
    }

    scorekeeper = (whoScored) => {
        
        const { scores } = this.state;

        let userScore = scores["user"];
        let computerScore = scores["computer"];

        switch (whoScored) {
            case "user":
                userScore++;
                break;
            case "computer":
                computerScore++;
                break;
            default: 
                break;
        }

        const updatedScore = {
            user: userScore,
            computer: computerScore
        }

        this.setState({ //this does not run componentDidMount? had to use componentDidUpdate
            scores: updatedScore
        });
    }

    componentDidUpdate() {
        console.log(this.state.scores);

        const { scores } = this.state;

        const newGame = {
            user: 0,
            computer: 0
        }

        if(scores.user == 5) {
            alert("YOU WON THE GAME!");
            this.setState({ // This does not call render either?
                scores: newGame
            });
        } else if (scores.computer == 5) {
            alert("Computer wins the game...");
            this.setState({
                scores: newGame
            });
        }
    }

    render() {
        return (
            <div className="game-rock-paper-scissors">
                <Images onClick={this.scorekeeper}/>
                <Scoreboard />
                <ResetButton />
            </div>
        )
    }

}

export default RockPaperScissorsGame;
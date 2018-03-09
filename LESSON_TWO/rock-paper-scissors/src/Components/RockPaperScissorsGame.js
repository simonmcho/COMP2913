import React, { Component } from 'react'; 
import Images from './Images';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';

class RockPaperScissorsGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: {
                user: 0,
                computer: 0
            },
            status: "Play game!"
        }

        this.newGame = {
            user: 0,
            computer: 0
        }

        this.resetGame = this.resetGame.bind(this);

    }

    // Keeps score. Data passed up from child Images component
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

        setTimeout( () => {
            if(scores.user == 5) {
                alert("YOU WON THE GAME!");
                this.setState({ // This does not call render either?
                    scores: this.newGame
                });
            } else if (scores.computer == 5) {
                alert("Computer wins the game...");
                this.setState({
                    scores: this.newGame
                });
            }
        }, 10);
    }

    resetGame() {
        this.setState({
            scores: {
                user: 0,
                computer: 0
            }
        })

    }

    render() {

        return (
            <div className="game-rock-paper-scissors">
                <Images onClick={this.scorekeeper}/>
                <Scoreboard score={this.state.scores} />
                <div>
                    <h4>
                        {this.state.status}
                    </h4>
                </div>
                <ResetButton reset={this.resetGame} />
            </div>
        )
    }

}

export default RockPaperScissorsGame;
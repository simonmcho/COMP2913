import React, { Component } from 'react'; 
import Images from './Images';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';

class RockPaperScissorsGame extends Component {
    constructor(props) {
        super(props);

        const startStatus = "Play Game!";

        this.state = {
            scores: {
                user: 0,
                computer: 0
            },
            status: startStatus
        }

        this.newGame = {
            user: 0,
            computer: 0
        }

        this.resetGame = this.resetGame.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
    }

    // Keeps score. Data passed up from child Images component
    scorekeeper = (whoScored) => { //why i dont have to bind this to this function?
        
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
            if(scores.user === 5) {
                this.setState({ // This does not call render either?
                    scores: this.newGame,
                    status: "YOU WON THE GAME!"
                });
            } else if (scores.computer === 5) {
                
                this.setState({
                    scores: this.newGame,
                    status: "YOU WON THE GAME!"
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

    updateStatus(newStatus) {
        console.log(newStatus)
        this.setState({
            status: newStatus
        })
    }

    render() {
        console.log("RENDERING")
        return (
            <div className="game-rock-paper-scissors">
                <Images onClick={this.scorekeeper} updateGameStatus={this.updateStatus}/>
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
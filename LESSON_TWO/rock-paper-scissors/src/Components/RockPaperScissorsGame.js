import React, { Component } from 'react'; 
import Images from './Images';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';

class RockPaperScissorsGame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game-rock-paper-scissors">
                <Images />
                <Scoreboard />
                <ResetButton />
            </div>
        )
    }

}

export default RockPaperScissorsGame;
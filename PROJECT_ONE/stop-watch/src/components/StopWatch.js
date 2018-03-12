import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        const stopText = "STOP";
        const startText = "START";
        const startTime = 0;

        this.theTimer;

        this.state = {
            timerText: stopText,
            resetText: "RESET",
            timerStatus: startTime
        };

        this.startTimer = this.startTimer.bind(this);
        this.manageTimer = this.manageTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    // Manage timer to start and stop
    manageTimer() {
        
        // Variables
        const currentState  = this.state;

        const currentTimeStatus = currentState.timerStatus;
        const currentTimerText = currentState.timerText;
        let updatedTimerText = '';
        // console.log(updatedTimerText);

        // Condition to start and stop timer
        if(currentTimerText === "START") {
            this.theTimer = setInterval(this.startTimer, 1000);
            updatedTimerText = "STOP";
        } else {
            clearInterval(this.theTimer);
            updatedTimerText = "START";
        }

        this.setState({
            timerText: updatedTimerText,
            timerStatus: currentTimeStatus
        });

    }

    // Function declaration to run timer
    startTimer() {
        let currentTime = this.state.timerStatus;

        currentTime++;

        this.setState({
            timerStatus: currentTime
        });
    }

    // Function declaration to reset timer
    resetTimer() {
        clearInterval(this.theTimer);

        this.setState({
            timerText: "START"
        });
    }

    componentWillMount() {
        // Start timer first time? Not sure if this is best
        this.theTimer = setInterval(this.startTimer, 1000);
    }

    render() {
        
        return (
            <div>
                <div>
                    {this.state.timerStatus}
                </div>
                <span>
                    <button onClick={this.manageTimer}>
                        {this.state.timerText}
                    </button>
                </span>
                <span>
                    <button onClick={this.resetTimer}>{this.state.resetText}</button>
                </span>
            </div>
        )

    };


}

export default StopWatch;
import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        const stopText = "STOP";
        const startTime = 0;

        this.theTimer = 0;

        this.state = {
            timerText: stopText,
            resetText: "RESET",
            timerStatus: startTime,
            timeFormatted: "00:00:00"
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
        currentTime++; //Increment before calculating

        // Assign variables to display timer format properly
        const seconds = currentTime % 60 > 9 ? `${currentTime % 60}` : `0${currentTime % 60}`;
        const minutes = Math.floor(currentTime % 3600 / 60) > 9 ? `${Math.floor(currentTime % 3600  / 60)}` : `0${Math.floor(currentTime % 3600  / 60)}`;
        const hours = Math.floor(currentTime / (60 * 60)) > 9 ? `${Math.floor(currentTime / (60 * 60))}` : `0${Math.floor(currentTime / (60 * 60))}`;

        const formattedTime = `${hours}:${minutes}:${seconds}`;

        this.setState({
            timerStatus: currentTime,
            timeFormatted: formattedTime
        });

    }

    // Function declaration to reset timer
    resetTimer() {
        clearInterval(this.theTimer);

        this.setState({
            timerText: "START",
            timerStatus: 0,
            timeFormatted: "00:00:00"
        });
    }

    componentWillMount() {
        // Start timer first time? Not sure if this is best
        this.theTimer = setInterval(this.startTimer, 1000);
        
    }

    // Must clear all intervals if another app is mounted
    componentWillUnmount() {
        clearInterval(this.theTimer);
    }

    render() {
        
        return (
            <div>
                <div>
                    {this.state.timeFormatted}
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
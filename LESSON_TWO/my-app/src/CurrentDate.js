import React, { Component } from 'react';
import ClockLabel from './ClockLabel.js';

class CurrentDate extends Component {
    constructor(props) { //constructor is a function that gets called upon first instantiation of object
        super(props); // Delegates constructor to parent constructor which is React.Component

        this.state = {
            currentDate: new Date(),
            color: 'yellow',
            backgroundColor: 'red'
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this); // Bind so you have access to this of component
        this.handleMouseLeave = this.handleMouseLeave.bind(this); // Same as above
    } 

    // Runs before render, it's synchronous
    componentWillMount() { // Specific to the instance of the component created by constructor
        // console.log("JUST bEFORE RENDERIN");
        this.setState({ test: true });
        console.log("WILL MOUNT TEST " + this.state.test); // this.state.test is undefined since
        // setState is async, so runs after console log
    }

    // Runs after render
    componentDidMount() {
        // console.log("AFTER COMPONENT RENDERS ON PAGE");
            
        setInterval(() => {

            //this.state.color = 'green'; // NEVER SET LIKE THIS, BECAUSE YOU NEED TO RUN setState to actually mutate properties and render properly
            this.setState(// setState is async. Waits for everything else to run first
                { 
                    currentDate: new Date(),
                    color: this.state.color === 'red' ? 'blue' : 'red'
                }
               
            ); // this forces render function to run every second

        }, 1000);
    }

    handleMouseEnter() {
        console.log("handle click")
        this.setState({ backgroundColor: 'black' }); // must set style on the html element first
    }

    handleMouseLeave() {
        this.setState( { backgroundColor: 'white' });
    }

    render() {
        //this.setState({ color: 'black'}) // Because setState will run render, it's an infinite loop
        return (
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}style={ {backgroundColor: this.state.backgroundColor} }>
                <ClockLabel color={this.state.color} />
                <p style={{ color: this.state.color }}>Current Date: {this.state.currentDate.toString()}</p>
            </div>
        )
    }

}

export default CurrentDate;
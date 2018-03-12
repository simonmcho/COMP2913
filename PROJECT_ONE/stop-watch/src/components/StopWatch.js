import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        // function timer(){
        //     var sec = 30;
        //     var timer = setInterval(function(){
        //         document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        //         sec--;
        //         if (sec < 0) {
        //             clearInterval(timer);
        //         }
        //     }, 1000);
        // }

        let time = 0;

        this.state = {
            currentTime : time
        }
    }

    // timer() {

    //     let sec = 0;
        
    //     const timer = setInterval( () => {



    //     });

    // }

    componentWillMount() {

        let  { currentTime } = this.state;

        setInterval( () => { 
            currentTime++;

            this.setState({
                currentTime : currentTime
            });
        }, 1000);
    }

    render() {
        console.log(this.state.currentTime)
        return (
            <div>
                <p>
                    { this.state.currentTime }
                </p>
            </div>
        )

    }


}

export default StopWatch;
import React, { Component } from 'react';

class ClockLabel extends Component {
    constructor(props) {
        super(props);

        // Here you have access to this.props
    }

    componentWillMount() {
        console.log(this.props.color);
    }

    componentWillReceiveProps(nextProps) { // can run multiple times
        console.log("COLOR PROPS CHANGED");
        // console.log(this.props, nextProps);
    }

   render() {
       console.log("CLOCK LABEL RENDER")
       return (
            <div>
                <span style={{ color: this.props.color }}>YEP</span>
            </div>
       )
   }

   
}

export default ClockLabel;
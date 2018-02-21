import React, { Component } from 'react';

// var Component = React.component; // ES5 way of writing import

var car = { make : "Toyota"}; // Why Component is in curly braces?
var { make } = car;
console.log(make) //logs out "Toyota" 

class Profile extends Component {
    render() {
        const name = 'SIMON CHO';
        const imageWidthSmall = { width: '250px' };
        const imageWidthMedium = { width: '500px'};

        return (
            <div>
                <h1>Profile Page</h1>
                <div className="sc-name">
                    <h3>{name}</h3>
                    <label htmlFor=""></label> 
                </div>
                <div className="sc-images">
                    <img 
                        src="./images/civic-typer.jpg" 
                        style={imageWidthSmall}
                    />  {/* imageWidth is a variable declared outside of return() */}
                </div>
                <h4>{this.props.fullName}</h4>
                <div>
                    <img 
                        src={this.props.imageEvo} 
                        style={imageWidthMedium}
                    />
                </div>
            </div>
        )
    }
}

export default Profile;
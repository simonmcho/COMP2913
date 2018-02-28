import React, { Component } from 'react';
import imageRock from '../images/rock.jpg';
import imagePaper from '../images/paper.jpg';
import imageScissors from '../images/scissors.jpg';

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

        this.userSelectedElement = this.userSelectedElement.bind(this);
    }

    userSelectedElement(e) {
        console.log(e.target.name);
        this.setState({ selection: e.target.name });
    };

    render() {
    
        return (
            <div className="game-images">
                <div onClick={this.userSelectedElement} style={{ display: "inline-block" }}>
                    <img name="rock" style={{ width: "250px", height: "250px" }}src={imageRock} />
                </div>
                <div onClick={this.userSelectedElement} style={{ display: "inline-block", marginLeft: "20px" }}>
                    <img name="paper" style={{ width: "250px", height: "250px" }}src={imagePaper} />
                </div>
                <div onClick={this.userSelectedElement} style={{ display: "inline-block", marginLeft: "20px" }}>
                    <img name="scissors" style={{ width: "250px", height: "250px" }}src={imageScissors} />
                </div>
            </div>
        )
    }
}

export default Images;
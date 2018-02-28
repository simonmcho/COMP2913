import React, { Component } from 'react';
import imageRock from '../images/rock.jpg';
import imagePaper from '../images/paper.jpg';
import imageScissors from '../images/scissors.jpg';

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            border: '3px red solid',
            borderRock: '3px blue solid',
            borderPaper: '3px blue solid',
            borderScissors: '3px blue solid',
            computerChoice: ''
        }

        this.userSelectedElement = this.userSelectedElement.bind(this);
    }

    userSelectedElement(e) {
        // if(e.target.name === "rock") {
        //     this.setState({ 
        //         selection: e.target.name,
        //         borderRock: "3px solid yellow",
        //         borderPaper: this.state.border,
        //         borderScissors: this.state.border
        //     });
        // } else if(e.target.name === "paper") {
        //     this.setState({ 
        //         selection: e.target.name,
        //         borderPaper: "3px solid yellow",
        //         borderRock: this.state.border,
        //         borderScissors: this.state.border
        //     }); 
        // } else {
        //     this.setState({ 
        //         selection: e.target.name,
        //         borderScissors: "3px solid yellow",
        //         borderRock: this.state.border,
        //         borderPaper: this.state.border
        //     });
        // }
        this.setState({
            border: "3px yellow solid"
        })
       
        
    };

    // Make this function private, randomly chooses one of three choices upon user selection
    // computerChoice() {
    //     this.setState({
    //         computerChoice: randomSelection()
    //     })
    // }

    render() {
    
        return (
            <div className="game-images">
                <div onClick={this.userSelectedElement} style={{ display: "inline-block" }}>
                    <img name="rock" style={{ width: "250px", height: "250px", border: this.state.border }}src={imageRock} />
                </div>
                <div onClick={this.userSelectedElement} style={{ display: "inline-block", marginLeft: "20px" }}>
                    <img name="paper" style={{ width: "250px", height: "250px", border: this.state.border }}src={imagePaper} />
                </div>
                <div onClick={this.userSelectedElement} style={{ display: "inline-block", marginLeft: "20px" }}>
                    <img name="scissors" style={{ width: "250px", height: "250px", border: this.state.border }}src={imageScissors} />
                </div>
            </div>
        )
    }
}

export default Images;
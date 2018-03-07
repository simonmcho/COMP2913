import React, { Component } from 'react';
import imageRock from '../images/rock.jpg';
import imagePaper from '../images/paper.jpg';
import imageScissors from '../images/scissors.jpg';


//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageStates: [
                {
                    name: 'rock',
                    src: imageRock,
                    border: '3px black solid'
                },
                {
                    name: 'paper',
                    src: imagePaper,
                    border: '3px black solid'
                },
                {
                    name: 'scissors',
                    src: imageScissors,
                    border: '3px black solid'
                }
            ]
        }

        this.userSelectedElement = this.userSelectedElement.bind(this);
        this.computerSelection = this.computerSelection.bind(this);
        this.determineWinner = this.determineWinner.bind(this);
        
    }

    // Function to change border color on selected image
    userSelectedElement(chosenImage) {
        
        const { imageStates } = this.state;
        
        const updatedImages = imageStates.map(image => {
            chosenImage === image ? image.border = '3px green solid' : image.border = '3px black solid';
            
            return image;
        });
  
        const computerChoiceImageName = this.computerSelection(this.state.imageStates);

        this.determineWinner(chosenImage.name, computerChoiceImageName);

        // Makes sense this waits for everything else, since we need to update with new values
        this.setState({
            imageStates: updatedImages 
        });       
        
    };

    // Computer iterates through imageState, if random number matches index, return name of the image 
    computerSelection(imagesToIterate) {

        let chosenName = '';
        const numberOfImages = imagesToIterate.length;
        const numberChosen = Math.floor(Math.random() * numberOfImages);

        imagesToIterate.forEach((currentElement, currentIndex) => {
            if(numberChosen === currentIndex) {
                chosenName = currentElement.name; //returning currentElement.name here gets out of forEach loop but not the function?
            }
        });

        return chosenName;

    }

    // Function to determine winner
    determineWinner(userChoice, computerChoice) {
        

        const winningChoice = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        }
        
        if(winningChoice[userChoice] === computerChoice) {
            this.props.onClick("user");
            console.log("YOU WIN! You: " + userChoice.toUpperCase() + " VS. Computer: " + computerChoice.toUpperCase());
        } else if(winningChoice[computerChoice] === userChoice) {
            this.props.onClick("computer");
            console.log("YOU LOSE! You: " + userChoice.toUpperCase() + " VS. Computer: " + computerChoice.toUpperCase());
        } else {
            this.props.onClick("both");
            console.log("YOU TIE! You: " + userChoice.toUpperCase() + " VS. Computer: " + computerChoice.toUpperCase());
        }

    }


    render() {

        // imageStates is the name of the first property of the state object. 
        const { imageStates } = this.state;
        
        const inlineStyle = { 
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '5px'
        };

        return (
            <div className="game-images">
            {
               imageStates.map((element, index) => {// Iterate through the object
                   
                    const currentImageIndex = `image_${ index }`;
                    
                    return (
                        <div key={ currentImageIndex } onClick={ () => this.userSelectedElement(element)  } style={ inlineStyle } >
                            <img name={ element.name } style={ { width: '250px', height: '250px', border: element.border } } src={ element.src } onClick = { this.props.onClick } />
                        </div>
                    );
                })
            }
            </div>
        )
    }

}

export default Images;
import React, { Component } from 'react';
import imageRock from '../images/rock.jpg';
import imagePaper from '../images/paper.jpg';
import imageScissors from '../images/scissors.jpg';


//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
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

    // Function for computer choice...maybe can choose within userSelecetdElement map function 
    computerSelection(imagesToIterate) {

        let chosenName = '';
        const numberOfImages = imagesToIterate.length;
        const imageChosen = Math.floor(Math.random() * numberOfImages);

        imagesToIterate.forEach((currentElement, currentIndex) => {
            if(imageChosen == currentIndex) {
                //console.log("Computer chose " + currentElement.name);
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
        
        if(winningChoice[userChoice] == computerChoice) {
            alert("You chose " + userChoice + " and computer chose " + computerChoice +", so you win!");
        } else if(winningChoice[computerChoice] == userChoice) {
            alert("You chose " + userChoice + " and computer chose " + computerChoice + ", so computer wins!");
        } else {
            alert("You chose " + userChoice + " and computer chose " + computerChoice + ", so it's a tie!");
        }

    }

    // Function to change border color on selected image
    userSelectedElement(chosenImage) {
        
        const { images } = this.state;
        
        const updatedImages = images.map(image => {
            chosenImage === image ? image.border = '3px green solid' : image.border = '3px black solid';
            
            return image;
        });

        const computerChoice = this.computerSelection(this.state.images);
        // console.log(computerChoice);

        this.determineWinner(chosenImage.name, computerChoice);

        this.setState({
            images: updatedImages
        });       
        
    };

    render() {

        const { images } = this.state;
        
        const inlineStyle = { 
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '5px'
        };

        return (
            <div className="game-images">
            {
                images.map((image, index) => {
                    const currentImageIndex = `image_${ index }`;
                    
                    return (
                        <div key={ currentImageIndex } onClick={ () => this.userSelectedElement(image)  } style={ inlineStyle }>
                            <img name={ image.name } style={ { width: '250px', height: '250px', border: image.border } } src={ image.src } />
                        </div>
                    );
                })
            }
            </div>
        )
    }

}

export default Images;
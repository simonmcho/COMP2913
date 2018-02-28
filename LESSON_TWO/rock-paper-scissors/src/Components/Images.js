import React, { Component } from 'react';
import imageRock from '../images/rock.jpg';
import imagePaper from '../images/paper.jpg';
import imageScissors from '../images/scissors.jpg';

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                {
                    name: 'Rock',
                    src: imageRock,
                    border: '3px red solid'
                },
                {
                    name: 'Rock',
                    src: imagePaper,
                    border: '3px red solid'
                },
                {
                    name: 'Rock',
                    src: imageScissors,
                    border: '3px red solid'
                }
            ]
        }

        this.userSelectedElement = this.userSelectedElement.bind(this);
    }

    userSelectedElement(choosenImage) {

        const { images } = this.state;
        
        const updatedImages = images.map(image => {
            image.border = choosenImage === image ? '3px yellow solid' : '3px red solid';
            return image;
        });

        this.setState({
            images: updatedImages
        });       
        
    };

    // Make this function private, randomly chooses one of three choices upon user selection
    // computerChoice() {
    //     this.setState({
    //         computerChoice: randomSelection()
    //     })
    // }

    render() {
        const { images } = this.state;

        return (
            <div className="game-images">
            {
                images.map((image, index) => {
                    return (
                        <div key={ `image_${ index }` } onClick={ () => this.userSelectedElement(image)  } style={{ display: "inline-block" }}>
                            <img name={ image.name } style={{ width: "250px", height: "250px", border: image.border }} src={image.src} />
                        </div>
                    );
                })
            }
            </div>
        )
    }

}

export default Images;
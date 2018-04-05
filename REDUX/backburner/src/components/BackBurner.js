import React, { Component } from 'react';

class BackBurner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.listOfItems.map( item => {
                            return (
                                <li>item.name</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default BackBurner;
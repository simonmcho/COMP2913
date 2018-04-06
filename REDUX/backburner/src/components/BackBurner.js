import React, { Component } from 'react';

class BackBurner extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            itemToAdd: ''
        }
    
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        const value = this.state.itemToAdd;

        this.props.onAddItemToList(value);
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({
            [e.target.name] : value
        })

    }

    handleSubmit(e) {
        e.preventDefault();

        this.handleClick();

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.listOfItems.map( item => {
                            return (
                                <li key={item.name}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input name="itemToAdd" type="text" value={this.state.itemToAdd} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>ADD ITEM</button>
                </form>
            </div>
        )
    }

}

export default BackBurner;
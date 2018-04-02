import React, { Component } from 'react';

class BadRequest extends Component { 
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h3>Oops! There seems to be an error...</h3>
                <p>{this.props.errorMessage}</p>
            </div>
        )
    }
}

export default BadRequest;
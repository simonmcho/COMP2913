import React, { Component } from 'react';

class DogView extends Component {
  render() {
    
    const { match } = this.props;
    console.log(match.params)
    return (
        <div>
            <p>{match.params.breed || 'Cihuhaha'}</p>
        </div>
    );
  }
}

export default DogView;

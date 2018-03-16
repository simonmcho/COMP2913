import React, { Component } from 'react';

class CarListItem extends Component {w

    render() {
         return (
                <div style={{ 'width': '25%', 'margin': '0 auto', 'borderBottom': `1px solid #000` , 'marginBottom': '15px' }}>
                  <li>{this.props.brand} {this.props.make} {this.props.year} - ${this.props.price}
                    <img src={this.props.imageUrl} alt="" style={{ 'width': '175px', 'height': 'auto', 'display' : 'block', 'margin': '0 auto' }} />
                  </li>
                  <span>{this.props.new ? "NEW CAR!" : "USED CAR"}</span>
                </div>
        )
    }

}

export default CarListItem;
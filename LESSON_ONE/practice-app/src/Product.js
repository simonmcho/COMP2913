import React, { Component } from 'react';

class Product extends Component {
    render() {

        return (
            <div>
                <h4 className="product-name-header">
                    {this.props.productName}
                </h4>
                <div>
                    <p>
                        This product allows you to listen for key words spoken 
                        in your room, and allows commands at your disposal. 
                    </p>
                    <p>
                        Cost (CAD): ${this.props.productPrice}
                    </p>
                </div>
            </div>
        );
    }
}

export default Product;
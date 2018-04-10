import React, { Component } from 'react';

// Displays city selections
class CitySelections extends Component {
  
    render() {
        return (
            <div style={{ textAlign: 'center' }} >
                <h2 style={{ textAlign: 'center' }}>Get Weather Status from these 5 cities!</h2>
                <form onSubmit={this.props.submitCity}>
                    <select value={this.props.value} onChange={this.props.changeCity}>
                        <option value="vancouver">Vancouver, B.C.</option>
                        <option value="miami">Miami, Florida</option>
                        <option value="kyiv">Kyiv, Ukraine</option>
                        <option value="suva">Suva, Fiji Islands</option>
                        <option value="dar es salaam">Dar es Salaam, Tanzania</option>
                    </select>
                    <input type="submit" value="Get Weather!" />
                </form>
            </div>
        )
    }
}

export default CitySelections;
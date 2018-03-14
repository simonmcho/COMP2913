import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarListItem from './components/CarListItem.js';

class App extends Component {
  constructor(props) {
    super(props);

    const cars = [
      {
        brand: 'Toyota',
        make: 'Corolla',
        year: 2015,
        imageUrl: 'http://s3.caradvice.com.au/thumb/1000/562/wp-content/uploads/2015/06/2015-toyota-corolla-zr-4.jpg',
        price: 19200,
        new: false
      },
      {
        brand: 'Honda',
        make: 'Civic',
        year: 2016,
        imageUrl: 'https://cars.usnews.com/static/images/Auto/izmo/i2314304/2016_honda_civic_angularrear.jpg',
        price: 21600,
        new: false
      },
      {
        brand: 'Ford',
        make: 'Mustang',
        year: 2008,
        imageUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAB80FOC051B0101.jpg',
        price: 13600,
        new: false
      },
      {
        brand: 'Mercedes Benz',
        make: 'C-Class C43',
        year: 2017,
        imageUrl: 'https://61571e67bd8f1f6acb1a-642f5177af5aebf9ccc5072ad2e9ac32.ssl.cf1.rackcdn.com/WDDWJ6EB0HF469169/b101c9f787e7c70c0803a02b2210783a.jpg',
        price: 68000,
        new: true
      },
      {
        brand: 'Tesla',
        make: 'Model X',
        year: 2017,
        imageUrl: 'https://cnet4.cbsistatic.com/img/3-14WgVgrMGZ_pKcAqsefdLScJc=/830x467/2016/04/28/5a91e8fc-14bc-4c22-abe4-b990073328d2/2016-tesla-model-s-19-of-43.jpg',
        price: 130000,
        new: true
      }
    ];

    this.state = {
      friends: ['John', 'Mary', 'Bob'],
      cars
    }
  }
  render() {
    let friendElements = [];
    const { friends } = this.state;

    friends.forEach((element, index) => {// reling on index for key not good due to array being reordered https://reactjs.org/docs/lists-and-keys.html

      friendElements.push( //Key is important so that react knows what to re-render.
        <li key={`name-id-${index}`} data-tag-id={`${element}-${index}`}>{element}</li>
      )

    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ol style = {{ 'width' : '25%', 'margin' : '0 auto'}}>
          {friendElements}
        </ol>
        <ol>
          {this.state.friends.map( (friend, index) => {
            return (
              <li key={`name-id-${index}`} data-tag-id={`${friend}-${index}`}>{friend}</li>
            )
          })}
        </ol>
        <ol>
          {
            this.state.cars.map( (car, index) => {
              return (
                <CarListItem 
                  key={`${car.make}-${car.year}`}
                  brand={car.brand}
                  make={car.make}
                  year={car.year}
                  imageUrl={car.imageUrl}
                  price={car.price}
                  new={car.new} 
                />
              )

            })
          }
        </ol>
      </div>
    );
  }
}

export default App;

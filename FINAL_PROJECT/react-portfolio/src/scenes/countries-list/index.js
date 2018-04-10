import React from 'react';

//import CountriesList from '../applications/countries-list/CountriesList';
//import CountriesListContainer from '../applications/countries-list/CountriesListContainer';
import CountriesListContainer from './scenes/CountriesListContainer';

class CountriesListScene extends React.Component {
  render() {
    return (
        <div style={{ textAlign : 'center' }} >
            <p>Countries List</p>
            <CountriesListContainer />
        </div>
    );
  }
}

export default CountriesListScene;

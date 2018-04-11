import React from 'react';

import CountriesListContainer from './components/CountriesListContainer';

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

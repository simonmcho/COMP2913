import React from 'react';

import CountriesList from '../applications/countries-list/CountriesList';

class CountriesListView extends React.Component {
  render() {
    return (
        <div style={{ textAlign : 'center' }} >
            <p>Countries List</p>
            <CountriesList />
        </div>
    );
  }
}

export default CountriesListView;

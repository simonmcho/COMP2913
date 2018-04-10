import { connect } from 'react-redux';
import CountriesList from './CountriesList';

import CountriesListActions from '../../../actions/CountriesListActions';

const mapStateToProps = (state, ownProps) => ({
    allCountries: state.searchedCountries
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFetchAllCountries : () => CountriesListActions.fetchAllCountries(dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesList);
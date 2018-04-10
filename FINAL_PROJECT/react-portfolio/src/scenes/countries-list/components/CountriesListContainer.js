import { connect } from 'react-redux';
import CountriesList from './CountriesList';

import CountriesListActions from '../../../actions/CountriesListActions';

const mapStateToProps = (state, ownProps) => ({
    allCountries: state.searchedCountries,
    showSpinner: state.showSpinner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFetchAllCountries : () => CountriesListActions.fetchAllCountries(dispatch),
    onFetchSearchedCountries: (apiToUse) => CountriesListActions.fetchSearchedCountries(dispatch, apiToUse)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesList);
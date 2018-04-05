import { connect } from 'react-redux';
import BackBurner from './BackBurner';

import BackBurnerActions from '../actions/BackBurnerActions.js';

const mapStateToProps = (state, ownProps) => ({
    listOfItems: state.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddItemToList: () => BackBurnerActions.addItemToList(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackBurner);
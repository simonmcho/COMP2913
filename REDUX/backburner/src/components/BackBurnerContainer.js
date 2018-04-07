import { connect } from 'react-redux';
import BackBurner from './BackBurner';

import BackBurnerActions from '../actions/BackBurnerActions.js';

// These variables are passed down to BackBurner as props
const mapStateToProps = (state, ownProps) => ({
    listOfItems: state.list,
    textValue: state.textValue
});

// This is passed down to props as well - eg. this.props.onAddItemList
const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddItemToList: (value) => BackBurnerActions.addItemToList(dispatch, value),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackBurner);
import { connect } from 'react-redux';
import BackBurner from './BackBurner';

import BackBurnerActions from '../actions/BackBurnerActions.js';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddItemToList: () => BackBurnerActions.
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackBurner);
import { connect } from 'react-redux';
import NavBar from './nav_bar';
// import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';
import { getMixes,
	setPlayerState, 
	setCurrentMixId } from '../../actions/mix_actions';
import { setFilter } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mix: state.mix,
	modalFunctions: ownProps.modalFunctions,
	filter: state.filter
});

const mapDispatchToProps = dispatch => ({
	getMixes: searchString => dispatch(getMixes(searchString)),
	setFilter: (filterType, val) => dispatch(setFilter(filterType, val)),
	setPlayerState: playerOpen => dispatch(setPlayerState(playerOpen)),
	setCurrentMixId: mixId => dispatch(setCurrentMixId(mixId)),


	// map setFilter...
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);

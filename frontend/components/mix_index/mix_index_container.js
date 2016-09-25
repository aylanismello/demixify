import { connect } from 'react-redux';
import MixIndex from './mix_index';
import {
	getMix,
	setCurrentMixId,
	setPlayerState } from '../../actions/mix_actions';

const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mix: state.mix,
	filter: state.filter,
	likedMixes: state.session.currentUser.likedMixes
});

const mapDispatchToProps = dispatch => ({
	getMix: mixId => dispatch(getMix(mixId)),
	setCurrentMixId: mixId => dispatch(setCurrentMixId(mixId)),
	setPlayerState: playerOpen => dispatch(setPlayerState(playerOpen))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MixIndex);

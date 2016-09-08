import { connect } from 'react-redux';
import SoundPlayer from './sound_player';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = state =>({
	currentUser: state.session.currentUser,
	mixes: state.mix.mixes,
	currentMixId: state.mix.currentMixId,
	likedMixes: state.session.currentUser.liked_mixes
});


const mapDispatchToProps = dispatch => ({
	createLike: mixId => dispatch(createLike(mixId)),
	deleteLike: mixId => dispatch(deleteLike(mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SoundPlayer);

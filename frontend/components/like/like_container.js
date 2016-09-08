import { connect } from 'react-redux';
import Like from './like';
import { createLike, destroyLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {

	let likedMixes = state.session.currentUser.likedMixes;
	let currentMixId = state.mix.currentMixId;

	let liked = likedMixes.includes(currentMixId);
	// let liked = false;

	return {
		liked,
		currentMixId
	};
};

const mapDispatchToProps = dispatch => ({
	createLike: mixId => dispatch(createLike(mixId)),
	destroyLike: mixId => dispatch(destroyLike(mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Like);

import { connect } from 'react-redux';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {


	let likedMixes = state.session.currentUser.likedMixes;
	let currentMixId = state.mix.currentMixId;



	if (likedMixes.length > 0) {
		likedMixes = likedMixes.map(mixId => parseInt(mixId));
	}

	let liked = likedMixes.includes(currentMixId);

	return {
		liked,
		currentMixId
	};
};

const mapDispatchToProps = dispatch => ({
	createLike: mixId => dispatch(createLike(mixId)),
	deleteLike: mixId => dispatch(deleteLike(mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Like);

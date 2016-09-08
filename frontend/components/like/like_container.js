import { connect } from 'react-redux';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {

	let likedMixes = state.session.likedMixes;
	let currentMixId = `${state.mix.currentMixId}`;

	debugger;

	if (likedMixes === undefined) {
		likedMixes = [];
	}

	let liked = likedMixes.includes(currentMixId);
	// let liked = false;

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

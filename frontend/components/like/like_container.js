import { connect } from 'react-redux';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {

	//


	// debugger;
	let likedMixes = state.session.currentUser.likedMixes;
	let currentMixId = state.mix.currentMixId;



	if (likedMixes.length > 0) {
		likedMixes = likedMixes.map(mixId => parseInt(mixId));
	}

	// debugger;
	let liked = likedMixes.includes(currentMixId);
	// let lik

	// let liked = false;
	// let currentMixId = 1;

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

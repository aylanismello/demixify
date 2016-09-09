import { connect } from 'react-redux';
import SoundPlayer from './sound_player';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = state =>{



	// let orderedTracks = [];
	// if (state.mix.currentMixId !== -1) {
	// 	console.log('setting ordered tracks!!!\n\n\n');
	// 	orderedTracks = state.mix.mixes[state.mix.currentMixId].tracks.map((track, idx) => {
	// 		orderedTracks[track.track_number - 1] = track;
	// 	});
	//
	// 	}
	//

	return {
		currentUser: state.session.currentUser,
		mixes: state.mix.mixes,
		currentMixId: state.mix.currentMixId,
		currentUserId: state.session.currentUser.id,
		playerOpen: state.mix.playerOpen
	};
};


const mapDispatchToProps = dispatch => ({
	createLike: mixId => dispatch(createLike(mixId)),
	deleteLike: mixId => dispatch(deleteLike(mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SoundPlayer);

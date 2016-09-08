import { MixConstants } from '../actions/mix_actions';
import { CommentConstants } from '../actions/comment_actions';
import * as _ from 'lodash';


let nullMix = Object.freeze({
	mixes: {},
	currentMix: {mix: {}, tracks: [], comments: []},
	errors: []
});


const MixReducer = (state=nullMix, action) => {
		let newState;
		// debugger;

		switch (action.type) {
			case CommentConstants.RECEIVE_NEW_COMMENT:

				const newComment = action.comment;
				newState = _.merge(state, {});
				newState.currentMix.comments.push(newComment);
				return newState;

			case CommentConstants.RECEIVE_COMMENTS:

				// debugger;
				newState = _.merge({}, state);
				newState.currentMix.comments = [];
				newState.currentMix.comments = action.comments;
				return newState;



			case MixConstants.RECEIVE_NEW_MIX:


				let newMixes = _.merge({}, state.mixes, action.mix)	;
				newState = _.merge({}, state, {mixes: newMixes});
				debugger;
				return newState;


			case MixConstants.RECEIVE_NEW_TRACK:
				newState = _.merge(state, {});
				newState.currentMix.tracks.push(action.track);
				return newState;

			case MixConstants.RECEIVE_TRACKS:

				newState = _.merge({}, state);
				newState.currentMix.tracks = [];
				newState.currentMix.tracks = action.tracks;
				return newState;



			case MixConstants.RECEIVE_MIXES:
				newState = _.merge({}, state, {mixes: action.mixes});
				// newState.mixes = []; maybe
				// newState.mixes = action.mixes;
				return newState;

			case MixConstants.RECEIVE_MIX:
				// debugger;
				newState = _.merge(state, {});
				newState.currentMix.tracks = [];
				newState.currentMix.mix = action.mix;
				return newState;



			case MixConstants.RECEIVE_ERRORS:
				const errors = action.errors;
				return _.merge({}, nullMix, {errors});
			default:
				return state;

		}
};

export default MixReducer;

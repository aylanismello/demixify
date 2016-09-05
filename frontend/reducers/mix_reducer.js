import { MixConstants } from '../actions/mix_actions';
import * as _ from 'lodash';


let nullMix = Object.freeze({
	mixes: [],
	currentMix: {mix: {}, tracks: []},
	errors: []
});


// tracksOrdered = [];
// store.getState().mix.currentMix.tracks.map((track) => {tracksOrdered[track.track_number - 1] = track;});

const MixReducer = (state=nullMix, action) => {

		// debugger;

		let newState;
		switch (action.type) {
			case MixConstants.RECEIVE_NEW_MIX:
				const currentMix = action.mix;
				newState = _.merge(state, {});
				newState.currentMix.tracks = [];
				newState.currentMix.mix = action.mix;
				return newState;
			case MixConstants.RECEIVE_NEW_TRACK:
				newState = _.merge(state, {});
				newState.currentMix.tracks.push(action.track);
				return newState;
			case MixConstants.RECEIVE_MIXES:

				const newMixes = action.mixes;
				newState = _.merge(state, {mixes: newMixes});
				// debugger;
				// newState.mixes = [];
				// newState.mixes = newMixes;



				return newState;
			case MixConstants.RECEIVE_ERRORS:
				const errors = action.errors;
				return _.merge({}, nullMix, {errors});
			default:
				return state;

		}
};

export default MixReducer;

import { MixConstants } from '../actions/mix_actions';
import * as _ from 'lodash';


let nullMix = Object.freeze({
	currentMix: {mix: {}, tracks: []},
	errors: []
});


// tracksOrdered = [];
// store.getState().mix.currentMix.tracks.map((track) => {tracksOrdered[track.track_number - 1] = track;});

const MixReducer = (state=nullMix, action) => {

		// debugger;

		let newMix;
		switch (action.type) {
			case MixConstants.RECEIVE_NEW_MIX:
				const currentMix = action.mix;
				newMix = _.merge(state, {});
				newMix.currentMix.tracks = [];
				newMix.currentMix.mix = action.mix;
				return newMix;
			case MixConstants.RECEIVE_NEW_TRACK:
				newMix = _.merge(state, {});
				newMix.currentMix.tracks.push(action.track);
				return newMix;
			case MixConstants.RECEIVE_ERRORS:
				const errors = action.errors;
				return _.merge({}, nullMix, {errors});
			default:
				return state;

		}
};

export default MixReducer;

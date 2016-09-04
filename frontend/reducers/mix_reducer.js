import { MixConstants } from '../actions/mix_actions';
import * as _ from 'lodash';


let nullMix = Object.freeze({
	currentMix: null,
	currentTracks: [],
	errors: []
});


const MixReducer = (state=nullMix, action) => {

		// debugger;

		let newMix;
		switch (action.type) {
			case MixConstants.RECEIVE_NEW_MIX:
				const currentMix = action.mix;
				newMix = _.merge({}, state, {currentMix});
				// debugger;
				return newMix;
			case MixConstants.RECEIVE_NEW_TRACK:
				newMix = _.merge(state, {});
				newMix.currentTracks.push(action.track);

				debugger;

				// const newTrack = action.track;
			// return _.merge({}, nullMix, {tr});
				return newMix;
			case MixConstants.RECEIVE_ERRORS:
				const errors = action.errors;
				return _.merge({}, nullMix, {errors});
			default:
				return state;

		}
};

export default MixReducer;

import { MixConstants } from '../actions/mix_actions';
import * as _ from 'lodash';


let nullMix = Object.freeze({
	currentMix: null,
	errors: []
});


const MixReducer = (state=nullMix, action) => {

		// debugger;

		switch (action.type) {
			case MixConstants.RECEIVE_NEW_MIX:
				const currentMix = action.mix;
				let newMix = _.merge({}, nullMix, {currentMix});
				// debugger;
				return newMix;
			case MixConstants.RECEIVE_ERRORS:
				const errors = action.errors;
				return _.merge({}, nullMix, {errors});
			default:
				return state;

		}
};

export default MixReducer;

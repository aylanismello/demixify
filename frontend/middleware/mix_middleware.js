import { MixConstants, receiveNewMix, receiveErrors } from '../actions/mix_actions';
import { hashHistory } from 'react-router';

import * as API from '../util/mix_api_util';

const MixMiddleware = ({getState, dispatch}) => next => action => {
	let success;

	const error = (data) => {
		dispatch(receiveErrors(data));
	};

	const submitMixSuccess = user => {
			hashHistory.push('/home');
			dispatch(receiveNewMix(user));
	};


	debugger;

// we've received
// {
// 	mix_name:
// 	description:
// 	tracks: {
// 		number, name, unkown
// 	},
// 	user_id
// }
	switch (action.type) {

		case MixConstants.SUBMIT_MIX:

			API.submitMix(action.mix, submitMixSuccess, error);
			return next(action);

			// 	tracks: {
			// 		number, name, unkown
			// 	},
		case MixConstants.SUBMIT_TRACK:
		// make api call to make soundcloud object

			return next(action);


		default:
			return next(action);

	}

};

export default MixMiddleware;

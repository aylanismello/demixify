import { MixConstants, receiveNewMix, receiveNewTrack, receiveErrors } from '../actions/mix_actions';
import { hashHistory } from 'react-router';

import * as API from '../util/mix_api_util';

const MixMiddleware = ({getState, dispatch}) => next => action => {
	let success;

	const error = (data) => {
		dispatch(receiveErrors(data));
	};

	const submitMixSuccess = mix => {
			console.log('success');
			hashHistory.push('/home');
			dispatch(receiveNewMix(mix));
	};

	const submitTrackSuccess = track => {
		console.log('sucess adding track');
		dispatch(receiveNewTrack(track));
	};


	switch (action.type) {

		case MixConstants.SUBMIT_MIX:

			API.submitMix(action.mix,
				submitMixSuccess, error, submitTrackSuccess);

			return next(action);

		case MixConstants.GET_MIXES:
			API.getMixes(action.searchString);
			return next(action);

		default:
			return next(action);

	}

};

export default MixMiddleware;

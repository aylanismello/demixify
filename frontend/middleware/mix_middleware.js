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


	switch (action.type) {

		case MixConstants.SUBMIT_MIX:

			API.submitMix(action.mix, submitMixSuccess, error);

			return next(action);


		default:
			return next(action);

	}

};

export default MixMiddleware;

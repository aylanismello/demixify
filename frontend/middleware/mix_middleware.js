import { MixConstants, receiveNewMix, receiveMixes,
	receiveMix, receiveNewTrack, receiveTracks,
	receiveErrors, setCurrentMixId } from '../actions/mix_actions';
import { hashHistory } from 'react-router';

import * as API from '../util/mix_api_util';

const MixMiddleware = ({getState, dispatch}) => next => action => {
	let success;

	const error = (data) => {
		dispatch(receiveErrors(data));
	};

	const submitMixSuccess = mix => {
			// console.log('success');
			hashHistory.push('/home');
			dispatch(receiveNewMix(mix));
	};


	const submitTrackSuccess = track => {
		// console.log('sucess adding track');
		dispatch(receiveNewTrack(track));
	};

	const getMixesSuccess= mixes => {
		dispatch(receiveMixes(mixes));
	};


	const getTracksSuccess = tracks => {
		dispatch(receiveTracks(tracks));
	};


	const getMixSuccess = mix => {
		dispatch(receiveNewMix(mix));
		API.getTracks(Object.keys(mix)[0], getTracksSuccess);
	};


	switch (action.type) {

		case MixConstants.SUBMIT_MIX:
			API.submitMix(action.mix,
				submitMixSuccess, error, submitTrackSuccess);
			return next(action);
		case MixConstants.SET_CURRENT_MIX:
			dispatch(setCurrentMixId(action.mixId));
			return next(action);
		case MixConstants.GET_MIXES:
			API.getMixes(action.searchString, getMixesSuccess, error);
			return next(action);
		case MixConstants.GET_MIX:
			API.getMix(action.mixId, getMixSuccess, error);
			return next(action);

		default:
			return next(action);

	}

};

export default MixMiddleware;

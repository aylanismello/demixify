export const MixConstants = {
	SUBMIT_MIX: 'SUBMIT_MIX',
	SUBMIT_TRACK: 'SUBMIT_TRACK',
	RECEIVE_NEW_MIX: 'RECEIVE_NEW_MIX',
	RECEIVE_NEW_TRACK: 'RECEIVE_NEW_TRACK',
	RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};



export const submitMix = (mix) => ({
	type: MixConstants.SUBMIT_MIX,
	mix
});

export const submitTrack = (track) => ({
	type: MixConstants.SUBMIT_TRACK,
	track
});

export const receiveNewMix = (mix) => ({
	type: MixConstants.RECEIVE_NEW_MIX,
	mix
});

export const receiveNewTrack = track => ({
	type: MixConstants.RECEIVE_NEW_TRACKS,
	track
});

export const receiveErrors = (errors) => ({
	type: MixConstants.RECEIVE_ERRORS,
	errors
});

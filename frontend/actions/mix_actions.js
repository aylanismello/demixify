export const MixConstants = {
	SUBMIT_MIX: 'SUBMIT_MIX',
	RECEIVE_NEW_MIX: 'RECEIVE_NEW_MIX',
	RECEIVE_MIXES: 'RECEIVE_MIXES',
	GET_MIXES: 'GET_MIXES',
	RECEIVE_NEW_TRACK: 'RECEIVE_NEW_TRACK',
	RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};



export const submitMix = (mix) => ({
	type: MixConstants.SUBMIT_MIX,
	mix
});

export const getMixes = (searchString) => ({
	type: MixConstants.GET_MIXES,
	searchString
});

export const receiveMixes = (mixes) => ({
	type: MixConstants.RECEIVE_MIXES,
	mixes
});
export const receiveNewMix = (mix) => ({
	type: MixConstants.RECEIVE_NEW_MIX,
	mix
});

export const receiveNewTrack = (track) => ({
	type: MixConstants.RECEIVE_NEW_TRACK,
	track
});


export const receiveErrors = (errors) => ({
	type: MixConstants.RECEIVE_ERRORS,
	errors
});

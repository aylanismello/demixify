export const MixConstants = {
	SUBMIT_MIX: 'SUBMIT_MIX',
	RECEIVE_NEW_MIX: 'RECEIVE_NEW_MIX',
	RECEIVE_MIXES: 'RECEIVE_MIXES',
	RECEIVE_MIX: 'RECEIVE_MIX',
	GET_MIXES: 'GET_MIXES',
	GET_MIX: 'GET_MIX',
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	RECEIVE_NEW_TRACK: 'RECEIVE_NEW_TRACK',
	RECEIVE_ERRORS: 'RECEIVE_ERRORS',
	SET_CURRENT_MIX_ID: 'SET_CURRENT_MIX_ID'
};


export const setCurrentMixId = mixId => ({
	type: MixConstants.SET_CURRENT_MIX_ID,
	mixId
});


export const submitMix = (mix) => ({
	type: MixConstants.SUBMIT_MIX,
	mix
});

export const getMixes = (searchString) => ({
	type: MixConstants.GET_MIXES,
	searchString
});

export const getMix = (mixId) => ({
	type: MixConstants.GET_MIX,
	mixId
});

export const receiveMix = mix => ({
	type: MixConstants.RECEIVE_MIX,
	mix
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

export const receiveTracks = (tracks) => ({
	type: MixConstants.RECEIVE_TRACKS,
	tracks
});


export const receiveErrors = (errors) => ({
	type: MixConstants.RECEIVE_ERRORS,
	errors
});

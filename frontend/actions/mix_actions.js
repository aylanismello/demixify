export const MixConstants = {
	SUBMIT_MIX: 'SUBMIT_MIX',
	RECEIVE_NEW_MIX: 'RECEIVE_NEW_MIX',
	RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const submitMix = (mix) => ({
	type: MixConstants.SUBMIT_MIX,
	mix
});

export const receiveNewMix = (mix) => ({
	type: MixConstants.RECEIVE_NEW_MIX,
	mix
});

export const receiveErrors = (errors) => ({
	type: MixConstants.RECEIVE_ERRORS,
	errors
});

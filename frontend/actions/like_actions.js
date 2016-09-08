export const LikeConstants = {
	CREATE_LIKE: 'CREATE_LIKE',
	DELETE_LIKE: 'DELETE_LIKE',
	RECEIVE_LIKE: 'RECEIVE_LIKE',
	REMOVE_LIKE: 'REMOVE_LIKE'
};

export const createLike = mixId => ({
	type: LikeConstants.CREATE_LIKE,
	mixId
});

export const deleteLike = mixId => ({
	type: LikeConstants.DELETE_LIKE,
	mixId

});


export const receiveLike = like => ({
	type: LikeConstants.RECEIVE_LIKE,
	like
});

export const removeLike = like => ({
	type: LikeConstants.REMOVE_LIKE,
	like
});

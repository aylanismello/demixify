export const CommentConstants = {
	SUBMIT_COMMENT: 'SUBMIT_COMMENT',
	RECEIVE_NEW_COMMENT: 'RECEIVE_NEW_COMMENT',
	GET_COMMENTS: 'GET_COMMENTS',
	RECEIVE_COMMENTS: 'RECEIVE_COMMENTS'
};

export const submitComment = (comment, mixId) => ({
	type: CommentConstants.SUBMIT_COMMENT,
	comment,
	mixId
});

export const receiveNewComment = comment => ({
	type: CommentConstants.RECEIVE_NEW_COMMENT,
	comment
});



export const getComments = mixId => ({
	type: CommentConstants.GET_COMMENTS,
	mixId
});

export const receiveComments = comments => ({
	type: CommentConstants.RECEIVE_COMMENTS,
	comments
});

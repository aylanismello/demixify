export const CommentConstants = {
	SUBMIT_COMMENT: 'SUBMIT_COMMENT',
	RECEIVE_NEW_COMMENT: 'RECEIVE_NEW_COMMENT'
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

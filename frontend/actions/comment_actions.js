export const CommentConstants = {
	SUBMIT_COMMENT: 'SUBMIT_COMMENT'
};

export const submitComment = comment => ({
	type: CommentConstants.SUBMIT_COMMENT,
	comment
});

import { CommentConstants,
	receiveNewComment, receiveComments } from '../actions/comment_actions';

import * as API from '../util/comment_api_util';


const CommentMiddleware = ({getState, dispatch}) => next => action => {



	const commentSubmitSuccess = comment => {
		// debugger;
		console.log(`received ${comment.body}, now hitting up reducer`);

		dispatch(receiveNewComment(comment));
	};

	const commentsGetSuccess = comments => {
		console.log(`received comments ${comments}, now hitting up reducer`);
		dispatch(receiveComments(comments));
	}


	switch (action.type) {
		case CommentConstants.SUBMIT_COMMENT:
			API.submitComment(action.comment, action.mixId, commentSubmitSuccess);
			return next(action);
		case CommentConstants.GET_COMMENTS:
			API.getComments(action.mixId, commentsGetSuccess);
			return next(action);
		default:
			return next(action);

	}

};

export default CommentMiddleware;

import { CommentConstants,
	receiveNewComment } from '../actions/comment_actions';

import * as API from '../util/comment_api_util';


const CommentMiddleware = ({getState, dispatch}) => next => action => {



	const commentSubmitSuccess = comment => {
		// debugger;
		console.log(`received ${comment.body}, now hitting up reducer`);

		dispatch(receiveNewComment(comment));
	};


	switch (action.type) {
		case CommentConstants.SUBMIT_COMMENT:
			API.submitComment(action.comment, action.mixId, commentSubmitSuccess);
			return next(action);
		default:
			return next(action);

	}

};

export default CommentMiddleware;

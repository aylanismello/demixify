import { CommentConstants } from '../actions/comment_actions';

import * as API from '../util/comment_api_util';

const CommentMiddleware = ({getState, dispatch}) => next => action => {


		debugger;

	switch (action.type) {
		case CommentConstants.SUBMIT_COMMENT:

			// API.
			// debugger;
			return next(action);
		default:
			return next(action);

	}

};

export default CommentMiddleware;

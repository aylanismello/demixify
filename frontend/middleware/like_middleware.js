import {receiveLike, removeLike, LikeConstants}
	from '../actions/like_actions';
import * as API from '../util/like_api_util';


const LikeMiddleware = ({getState, dispatch}) => next => action => {
	let success;


	let createLikeSuccess = like => {
		// console.log(`received like: ${like}`);
		dispatch(receiveLike(like));
	};

	let deleteLikeSuccess = like => {
		// console.log(`deleting like: ${like}`);
		dispatch(removeLike(like));
	};


	switch (action.type) {
		case LikeConstants.CREATE_LIKE:
			API.createLike(action.mixId, createLikeSuccess);
			return next(action);
		case LikeConstants.DELETE_LIKE:
			API.deleteLike(action.mixId, deleteLikeSuccess);
			return next(action);
		default:
			return next(action);
	}

};

export default LikeMiddleware;

import { SessionConstants } from '../actions/session_actions';
import { LikeConstants } from '../actions/like_actions';
import * as _ from 'lodash';

let nullUser = Object.freeze({
	currentUser: {likedMixes: []},
	errors: []
});

const SessionReducer = (state=nullUser, action) => {

		let newUser;


	switch (action.type) {
		case SessionConstants.RECEIVE_CURRENT_USER:
			const currentUser = action.currentUser;
			newUser = _.merge({}, nullUser, {currentUser});

			// newUser.likedMixes = newUser.currentUser.likedMixes;

			return newUser;


		case LikeConstants.RECEIVE_LIKE:
			newUser = _.merge({}, state);

			// newUser.likedMixes.push(action.like.mixId);
			newUser.currentUser.likedMixes.push(action.like.mixId);

			// debugger;
			return newUser;

		case LikeConstants.REMOVE_LIKE:
			newUser = _.merge({}, state);
			let removeLike = action.like;
			// let oldLikedMixes = newUser.likedMixes;
			let oldLikedMixes = newUser.currentUser.likedMixes;

			let idx = oldLikedMixes.indexOf(removeLike.mixId);
			oldLikedMixes.splice(idx, 1);

			return newUser;

		case SessionConstants.RECEIVE_ERRORS:
			const errors = action.errors;
			return _.merge({}, nullUser, {errors});
		case SessionConstants.LOGOUT:
			return nullUser;
		default:
			return state;
	}

};

export default SessionReducer;

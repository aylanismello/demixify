import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import * as API from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {

	let success;

	const error = (data) => {
		dispatch(receiveErrors(data));
	};

	switch (action.type) {

		case SessionConstants.LOGIN:
			success = (user) =>  dispatch(receiveCurrentUser(user));
			API.login(action.user, success, error);
			return next(action);

		case SessionConstants.SIGNUP:
			success = (user) => {
					// debugger;
					dispatch(receiveCurrentUser(user));
				};
			API.signup(action.user, success, error);
			return next(action);

		case SessionConstants.LOGOUT:
			success = (data) => next(action);
			API.logout(success, error);
			break;

		default:
			return next(action);

	}

};

export default SessionMiddleware;

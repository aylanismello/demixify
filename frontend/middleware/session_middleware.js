import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { hashHistory } from 'react-router';

import * as API from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {

	let success;

	const error = (data) => {
		dispatch(receiveErrors(data));
	};

	const loginSuccess = user => {
			hashHistory.push('/home');
			dispatch(receiveCurrentUser(user));
	};

	const logoutSuccess = user => {
		hashHistory.push('/');
		next(action);
	};

	switch (action.type) {

		case SessionConstants.LOGIN:


			API.login(action.user, loginSuccess, error);
			return next(action);

		case SessionConstants.SIGNUP:


			API.signup(action.user, loginSuccess, error);
			return next(action);

		case SessionConstants.LOGOUT:

			API.logout(logoutSuccess, error);
			break;

		default:
			return next(action);

	}

};

export default SessionMiddleware;

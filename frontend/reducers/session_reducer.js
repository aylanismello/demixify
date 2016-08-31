import { SessionConstants } from '../actions/session_actions';
import * as _ from 'lodash';

let nullUser = Object.freeze({
	currentUser: null,
	errors: []
});

const SessionReducer = (state=nullUser, action) => {

		let newUser;

	switch (action.type) {
		case SessionConstants.RECEIVE_CURRENT_USER:
			const currentUser = action.currentUser;
			newUser = _.merge({}, nullUser, {currentUser});
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
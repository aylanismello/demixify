import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	window.store = store;
	window.login = login;
	window.signup = signup;
	window.logout = logout;
});

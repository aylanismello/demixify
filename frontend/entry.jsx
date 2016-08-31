import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
	// const store = configureStore();
	window.store = store;
	window.login = login;
	window.signup = signup;
	window.logout = logout;

	// debugger;
	let store;
	if (window.currentUser) {
		const preloadedState = {session: {currentUser: window.currentUser}};
		store = configureStore(preloadedState);
	} else {
		store = window.store = configureStore();
	}

	const root = document.querySelector('#root');
	ReactDOM.render(<Root store={store}/>, root);

});

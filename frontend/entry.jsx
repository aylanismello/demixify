import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	window.store = store;
	window.login = login;
	window.signup = signup;
	window.logout = logout;

	const root = document.querySelector('#root');
	ReactDOM.render(<Root store={store}/>, root);

});

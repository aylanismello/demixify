import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';



document.addEventListener("DOMContentLoaded", () => {

	let store;
	if (window.currentUser) {
		const preloadedState = {session: {currentUser: window.currentUser}};
		store = configureStore(preloadedState);
	} else {
		store = window.store = configureStore();
	}

// this tells the modal that it can block the entire body
	Modal.setAppElement(document.body);
	const root = document.querySelector('#root');



	ReactDOM.render(<Root store={store}/>, root);
	// ReactDOM.render(<FirstSoundPlayer/>, root);
});

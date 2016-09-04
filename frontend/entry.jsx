import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
// import { makeTracks, makeMix, createDJ } from './testers/soundcloud_tests';



document.addEventListener("DOMContentLoaded", () => {

	let store;
	if (window.currentUser) {
		const preloadedState = {session: {currentUser: window.currentUser}};
		store = configureStore(preloadedState);
	} else {
		store = window.store = configureStore();
	}



	Modal.setAppElement(document.body);
	const root = document.querySelector('#root');

	window.store = store;

	ReactDOM.render(<Root store={store}/>, root);
	// ReactDOM.render(<FirstSoundPlayer/>, root);
});

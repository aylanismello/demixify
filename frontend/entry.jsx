import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import { soundcloudTrackModelCreation } from './testers/trackApi';
import { searchSoundcloud } from './testers/searchSoundcloud';
import seedTracks from './testers/seederTracks';

document.addEventListener("DOMContentLoaded", () => {

	let store;
	if (window.currentUser) {
		const preloadedState = {session: {currentUser: window.currentUser}};
		store = configureStore(preloadedState);
	} else {
		store = window.store = configureStore();
	}

	// sentTrack and received track should now be in window.
	// feed this thing a track soundcloud id.
	// soundcloudTrackModelCreation(13158665);

	const cb = (tracks) => {
		// here we have the user select one
		// ok we chose 0, grab the id.

		let track_id = tracks[0].id;
		soundcloudTrackModelCreation(track_id);
		// console.log(tracks);

	};


	seedTracks.forEach ((track) => {
		if (track === 'NULL') {
			console.log('no track created, but empty track slot made in MIX....');
		}

		searchSoundcloud(track, cb);
	});





// this tells the modal that it can block the entire body
	Modal.setAppElement(document.body);
	const root = document.querySelector('#root');



	ReactDOM.render(<Root store={store}/>, root);
	// ReactDOM.render(<FirstSoundPlayer/>, root);
});

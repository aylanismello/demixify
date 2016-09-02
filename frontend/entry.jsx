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

	window.url = 'http://api.soundcloud.com/tracks/13158665';

	window.clientId = 'a13f1496f3ee0b36504328dde940b256';



	window.success = (data) => {
		let track = {};
		console.log(`${data} received.`);

		// window.track = data;
		track.title = data.title;

		track.artist = data.user; // returns little object with id, name

		track.artwork_url = data.artwork_url;


		track.permalink_url = data.permalink_url;
		// this way with the soundcloud player I can always generate new stream_urls!!

		track.year = data.release_year;
		track.streamable = data.streamable;
		track.stream_url = data.stream_url;

		window.track = track;

		// try sending this over to DB to set.

	};


	// title           | string    | not null, indexed
	// artist          | string    | not null
	// album           | string    | not null
	// year            | integer   | not null
	// track_url       | string    | not null  //link to soundcloud page where track is hosted
	// stream_url      | string    | not null  //embeddable sound stream
	// artwork_url     | string    | not null
	//
	window.ajax = $.ajax;




	window.ajax({
		url: window.url,
		data: {client_id: window.clientId},
		success: window.success});



// this tells the modal that it can block the entire body
	Modal.setAppElement(document.body);
	const root = document.querySelector('#root');



	ReactDOM.render(<Root store={store}/>, root);
	// ReactDOM.render(<FirstSoundPlayer/>, root);
});

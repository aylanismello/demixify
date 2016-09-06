import {VARS} from './vars';
import SC from 'soundcloud';
// https://developers.soundcloud.com/docs/api/guide#search

export const searchByTrack = (track, cb, mixType) => {

	const mixLength = 10;
	let timeLimit = 0;

	if (mixType === "mix") {

		timeLimit = (1000 * 60) * mixLength;
	}



	SC.initialize({
	  client_id: VARS.CLIENT_ID
	});

	SC.get('/tracks', {
	  q: track,
		duration: { from: timeLimit }
	}).then(function(tracks) {
		cb(tracks);
	});

};

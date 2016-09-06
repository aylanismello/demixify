import {VARS} from './vars';
import SC from 'soundcloud';
// https://developers.soundcloud.com/docs/api/guide#search
//


export const searchByTrack = (track, cb, mixType) => {

	// console.log('searching sd');

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
		// to set to mix filter
		duration: { from: timeLimit }

	}).then(function(tracks) {
		cb(tracks);
	});

};


// export const searchByTrack = (track, cb) => {
//
//
// 	console.log(`${track}`);
//
// 	const url = `http://api.soundcloud.com/tracks/?q=${track}&client_id=${VARS.CLIENT_ID}`;
//
// 	$.ajax({
// 		url,
// 		method: 'GET',
// 		sucess: cb
// 	});
//
// };

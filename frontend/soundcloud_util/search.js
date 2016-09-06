import {VARS} from './vars';
// https://developers.soundcloud.com/docs/api/guide#search
//
export const searchByTrack = (track, cb) => {

	// console.log('searching sd');
	SC.initialize({
	  client_id: VARS.CLIENT_ID
	});

	SC.get('/tracks', {
	  q: track
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

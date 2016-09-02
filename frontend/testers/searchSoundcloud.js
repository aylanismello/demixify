import {VARS} from '../util/vars';
// https://developers.soundcloud.com/docs/api/guide#search

export const searchSoundcloud = (track, cb) => {

	SC.initialize({
	  client_id: VARS.CLIENT_ID
	});

	// find all sounds of buskers licensed under 'creative commons share alike'
	SC.get('/tracks', {
	  q: track
	}).then(function(tracks) {
	  // console.log(tracks);
		cb(tracks);
	});

};

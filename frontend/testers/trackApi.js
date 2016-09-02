import {VARS, DUMMY_DATA} from '../util/vars';




export const soundcloudMixModelCreation = (soundcloud_mix_id, getMixId) => {

	const soundcloud_id = soundcloud_mix_id;
	const url = `http://api.soundcloud.com/tracks/${soundcloud_id}`;
	const clientId = VARS.CLIENT_ID;

	let soundcloudApiSuccess = (data) => {

		let mix = {};
		console.log(`${data} received.`);
		mix.title = data.title;
		mix.artist = data.user; // returns little object with id, name
		mix.artwork_url = data.artwork_url;
		mix.permalink_url = data.permalink_url;
		mix.year = data.release_year;
		mix.soundcloud_id = soundcloud_id;
		// MY SHIT
		mix.user_id = 1;
		mix.dj_id = 1;

		window.sentMix = mix;

		$.ajax({
			url: 'api/mixes',
			method: 'POST',
			data: {mix: mix},
			success: (theMix) => {
				console.log(`SUCCESS: theMIX is ${theMix}`);
				getMixId(theMix.id);
				window.receivedMix = theMix;
			},
			error: (theMix) => {
				console.log(`ERROR: theMix is ${theMix}`);
			}

		});

	};

	$.ajax({
		url: url,
		data: {client_id: clientId},
		success: soundcloudApiSuccess
	});



};

export const soundcloudTrackModelCreation = (track_id, mixId) => {
	const soundcloud_id = track_id;
	const url = `http://api.soundcloud.com/tracks/${soundcloud_id}`;
	const clientId = VARS.CLIENT_ID;


	let soundcloudApiSuccess = (data) => {
		let track = {};
		console.log(`${data} received.`);
		track.title = data.title;
		track.artist = data.user; // returns little object with id, name
		track.artwork_url = data.artwork_url;
		track.permalink_url = data.permalink_url;
		track.year = data.release_year;
		track.soundcloud_id = soundcloud_id;


		// MY SHIT
		track.track_number = 1;
		track.unknown = false;
		track.mix_id = mixId;

		window.sentTrack = track;
		$.ajax({
			url: 'api/tracks',
			method: 'POST',
			data: {track: track},
			success: (theTrack) => {
				console.log(`SUCCESS:
					theTrack is ${theTrack}`);
					window.receivedTrack = theTrack;
				},
			error: (theTrack) => console.log(`ERROR:
					theTrack is ${theTrack}`)
		});


		// try sending this over to DB to set.

	};



	$.ajax({
		url: url,
		data: {client_id: clientId},
		success: soundcloudApiSuccess
	});

};
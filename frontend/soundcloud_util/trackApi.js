import {VARS, DUMMY_DATA} from './vars';




export const createDJ = (artistObj) => {
	// hit up the api


};







export const soundcloudMixModelCreation = (soundcloud_mix_id, getMixId) => {

	const soundcloud_id = soundcloud_mix_id;
	const mixUrl = `http://api.soundcloud.com/tracks/${soundcloud_id}`;
	const clientId = VARS.CLIENT_ID;



	let djSuccess = (data) => {
		$.ajax({
			url: 'api/mixes',
			method: 'POST',
			data: {mix: mix},
			success: (theMix) => {
				console.log(`SUCCESS: theMIX is ${theMix}`);
				getMixId(theMix.id, mix.artist);
				window.receivedMix = theMix;
			},
			error: (theMix) => {
				console.log(`ERROR: theMix is ${theMix}`);
			}

		});
	}



	let mixSuccess = (data) => {

		let mix = {};
		console.log(`${data} received.`);
		mix.title = data.title;
		mix.artist = data.user; // returns little object with id, name
		mix.artwork_url = data.artwork_url;
		mix.permalink_url = data.permalink_url;
		mix.year = data.release_year;
		mix.soundcloud_id = soundcloud_id;
		// MY SHIT

		// can be set from state
		mix.user_id = 1;




		let dj = {};
		dj.soundcloud_id = mix.artist.id;
		dj.avatar_url = mix.artist.avatar_url;
		dj.name = mix.artist.username;


		debugger;

		$.ajax({
			url: 'api/djs',
			method: 'POST',
			data: {dj: dj},
			success: (theDj) => {
				debugger;
				mix.dj_id = theDj.id;
			},
			error: theDj => {window.mixReceived= theDj; console.log(`YOOO mix fucked ${data}`)}

		});




		// create dj from artist id and callback, then update this value
		mix.dj_id = 1;

		window.sentMix = mix;


		// BEFORE CREATION HERE, SET DJ_ID. SO MUST CREATE DJ FIRST


	};




	$.ajax({
		url: mixUrl,
		data: {client_id: clientId},
		success: mixSuccess
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

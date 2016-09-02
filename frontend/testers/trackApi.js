export const soundcloudTrackModelCreation = (track_id) => {
	const soundcloud_id = track_id;
	const url = `http://api.soundcloud.com/tracks/${soundcloud_id}`;
	const clientId = 'a13f1496f3ee0b36504328dde940b256';


	let soundcloudApiSuccess = (data) => {
		let track = {};
		console.log(`${data} received.`);
		// window.track = data;
		track.title = data.title;
		track.artist = data.user; // returns little object with id, name

		track.artwork_url = data.artwork_url;
		track.permalink_url = data.permalink_url;
		// this way with the soundcloud player
		// I can always generate new stream_urls!!

		track.year = data.release_year;
		track.soundcloud_id = soundcloud_id;
		// track.streamable = data.streamable;
		// track.stream_url = data.stream_url;
		window.sentTrack = track;
		// post request to my api

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
		success: soundcloudApiSuccess});

};

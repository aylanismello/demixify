import { trackModelCreation,
	djModelCreation } from '../soundcloud_util/trackApi';
const suc = (mix) => {

	console.log(`SUCCESS: mix/track is this obj: ${mix}`);
	window.receivedMix = mix;
};

const err = (errors) => {
	console.log(`ERROR: ${errors.responseJSON}`);
};


export const submitMix = (mix, success = suc, error = err, trackSuccess) => {

	// post to my api

	// makeDJ(mix.mix.user);

	makeMix(mix, success, trackSuccess);



	console.log('fuck u bitch');
	return `youz a bitch.`;
};

const makeDJ = (userObj) => {
	const DJtoCreate = convertSdObjToDJ(userObj);
	djModelCreation(DJtoCreate);

};


const convertSdObjToDJ = (userObj) => {
	// debugger;
	let dj = userObj;
	let objForAPI = {};
	objForAPI.soundcloud_id = dj.id;
	objForAPI.name = dj.username;
	objForAPI.avatar_url = dj.avatar_url;
	return objForAPI;
};


const convertSdObjToMix = (mixObj) => {
	let objForAPI = {};
	let mix = mixObj.mix;

	objForAPI.title = mix.title;
	objForAPI.artwork_url = mix.artwork_url;
	objForAPI.permalink_url = mix.permalink_url;
	objForAPI.year = mix.release_year;
	objForAPI.soundcloud_id = mix.id;
	objForAPI.dj_id = mix.user.id;
	objForAPI.artist = mix.user;



	objForAPI.description = mixObj.description;
	objForAPI.user_id = mixObj.user_id;

	return objForAPI;
	// debugger;


};

const convertSdObjToTrack = (trackObj, mixId) => {
	let objForAPI = {};
	let track = trackObj.sdObj;


	objForAPI.title = track.title;
	objForAPI.artwork_url = track.artwork_url;
	objForAPI.permalink_url = track.permalink_url;
	objForAPI.year = track.release_year;
	objForAPI.soundcloud_id = track.id;
	objForAPI.artist = track.user;

	objForAPI.unknown = trackObj.unknown;
	objForAPI.mix_id = mixId;
	objForAPI.track_number = trackObj.number;
	return objForAPI;
};


const makeMix = (sdTrackObj, receiveMix, receiveTrack) => {

	const mixToCreate = convertSdObjToMix(sdTrackObj);

	const makeTracks = (mix) => {


		console.log(`making tracks, setting mix id to
				${mix.id}`);

		receiveMix(mix);
// DEFINE RECEIVE TRACK

		let currentTrack;

		sdTrackObj.tracks.forEach((track) => {
			currentTrack = convertSdObjToTrack(track, mix.id);
			// debugger;
			trackModelCreation(currentTrack, receiveTrack);
			// soundcloudTrackModelCreation(track);
		});


	};



	$.ajax({
		url: 'api/mixes',
		method: 'POST',
		data: {mix: mixToCreate},
		success: makeTracks,
		error: err
	});


};

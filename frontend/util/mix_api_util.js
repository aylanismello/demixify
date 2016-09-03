const suc = (mix) => {

	console.log(`SUCCESS: mix/track is this obj: ${mix}`);
	window.receivedMix = mix;
};

const err = (errors) => {
	console.log(`ERROR: ${errors.responseJSON}`);
};


export const submitMix = (mix, success = suc, error = err) => {

	// post to my api

	// tracks belong to mixes. so make mix first


	makeMix(mix, makeTracks);

	console.log('fuck u bitch');
	return `youz a bitch.`;
};


const makeTracks = (mixId) => {
	console.log('now gonna make tracks!');
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


const makeMix = (sdTrackObj, makeTracksCB) => {

	const mixToCreate = convertSdObjToMix(sdTrackObj);
	// debugger;



	$.ajax({
		url: 'api/mixes',
		method: 'POST',
		data: {mix: mixToCreate},
		success: suc,
		error: err
	});


};

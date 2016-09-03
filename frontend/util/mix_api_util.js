import { searchByTrack } from '../soundcloud_util/search';

const suc = (user) => {

	console.log(`SUCCESS: mix/track is this obj: ${user}`);
};

const err = (errors) => {
	// debugger;
	console.log(`ERROR: ${errors.responseJSON}`);
};


// mix = {
// description: string
// mix_name:  string
// tracks: [
				// {unkown, number, name}
			// ]
// }



export const submitTrack = (track, success = suc, error = err) => {
	// search for track, on callback we want to return the object and set to state.

};

export const submitMix = (mix, success = suc, error = err) => {


	// first query sound cloud for track_id...

	// mixes need a dj id, so make a dj first.

	//


	// tracks need a mix id. so make a mix first.
	// practice making tracks


	// separate this into soundcloud queries and model queries.
	// let sdTrackIds = [];


	SC.initialize({
		client_id: VARS.CLIENT_ID
	});

	SC.get('/tracks', {
		q: track
	}).then(function(tracks) {
		// console.log(tracks);
		cb(tracks);
	});

	// PROMISE THIS SHIT

	// let receiveResponse = tracks => `got ${tracks}`;
	//
	// let request = new Promise( receiveResponse => {
	//   $.ajax({
	//     success: receiveResponse( 'success message' )
	//     })
	// });
	//
	// request.then( receiveResponse );



	console.log('fuck u bitch');
	return `youz a bitch.`;
};

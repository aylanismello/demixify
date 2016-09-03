import { searchByTrack } from '../soundcloud_util/search';

const suc = (user) => {

	console.log(`SUCCESS: mix is this obj: ${user}`);
};

const err = (errors) => {
	// debugger;
	console.log(`ERROR: ${errors.responseJSON}`);
};


// mix = {
// description: string
// mix_name:  string
// track_name: []
// }
export const submitMix = (mix, success = suc, error = err) => {


	// first query sound cloud for track_id...



	let mix_id = searchByTrack(mix.mix_name);

	console.log('fuck u bitch');
	return `youz a bitch.`;
};

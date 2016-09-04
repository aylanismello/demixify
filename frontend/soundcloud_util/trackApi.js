import {VARS, DUMMY_DATA} from './vars';






export const trackModelCreation = (trackObj) => {

	$.ajax({
		url: 'api/tracks',
		method: 'POST',
		data: {track: trackObj},
		success: (track) => console.log(`received track ${track}`),
		error: (errors) => {console.log(`failed with track. errors:
   ${errors.responseJSON}`);}
 });

};

export const djModelCreation = (djObj) => {
	$.ajax({
		url: 'api/djs',
		method: 'POST',
		data: {dj: djObj},
		success: (track) => console.log(`received dj ${djObj}`),
		error: (errors) => {console.log(`failed with dj. errors:
	 ${errors.responseJSON}`);}

	});
};

import {VARS, DUMMY_DATA} from './vars';




export const trackModelCreation = (trackObj, receiveTrack) => {

	$.ajax({
		url: 'api/tracks',
		method: 'POST',
		data: {track: trackObj},
		success: (track) => receiveTrack(track),
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

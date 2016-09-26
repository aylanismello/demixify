import { soundcloudTrackModelCreation, soundcloudMixModelCreation } from './trackApi';
import { searchSoundcloud } from './searchSoundcloud';
import seedTracks from './seederTracks';




export const makeTracks = (mixId) => {


	const cb = (tracks) => {
		let track_id = tracks[0].id;
		soundcloudTrackModelCreation(track_id, mixId);
	};


	seedTracks.forEach ((track) => {
		if (track === 'NULL') {
			// console.log('no track created, but empty track slot made in MIX....');
		}
		searchSoundcloud(track, cb);
	});

};


export const makeMix = (theMix, getMixId) => {

	const cb = (mix) => {
		let soundcloud_mix_id = mix[0].id;

		// here create the DJ, and then pass in the DJ's id to mix for creation.


		soundcloudMixModelCreation(soundcloud_mix_id, getMixId);
	};

	searchSoundcloud(theMix, cb);

};

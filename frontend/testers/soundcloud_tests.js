import { soundcloudTrackModelCreation, soundcloudMixModelCreation } from './trackApi';
import { searchSoundcloud } from './searchSoundcloud';
import seedTracks from './seederTracks';

export const makeTracks = () => {


	const cb = (tracks) => {
		let track_id = tracks[0].id;
		soundcloudTrackModelCreation(track_id);
	};


	seedTracks.forEach ((track) => {
		if (track === 'NULL') {
			console.log('no track created, but empty track slot made in MIX....');
		}
		searchSoundcloud(track, cb);
	});

};


export const makeMix = (theMix) => {

	const cb = (mix) => {
		let soundcloud_mix_id = mix[0].id;
		debugger;
		soundcloudMixModelCreation(soundcloud_mix_id);
	};
	debugger;

	searchSoundcloud(theMix, cb);

};

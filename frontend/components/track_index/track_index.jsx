import React from 'react';
import TrackIndexItem from './track_index_item';

const TrackIndex = ({tracks}) => {


	let orderedTracks = [];
	tracks.map((track, idx) => {
		orderedTracks[track.track_number - 1] = track;
	});


	return (
		<div className="track-index-container">
			<ul>
				{orderedTracks.map(track => {
					return (
						<TrackIndexItem track={track}/>
					);
				})}
			</ul>
		</div>
	);
};

export default TrackIndex;

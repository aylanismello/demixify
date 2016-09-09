import React from 'react';

const TrackIndexItem = ({track}) => (
		<li className="track-index-item" key={track.id}>
				{track.track_number}: {track.title} by {track.artist_username}
		</li>
);

export default TrackIndexItem;

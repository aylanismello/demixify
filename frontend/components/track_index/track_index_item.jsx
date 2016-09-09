import React from 'react';

const TrackIndexItem = ({track}) => (
		<li className="track-index-item">
				{track.track_number}: {track.title} by {track.artist_username}
		</li>
);

export default TrackIndexItem;

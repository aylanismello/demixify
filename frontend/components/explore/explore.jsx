import React from 'react';
import MixIndexContainer from '../mix_index/mix_index_container';

class Explore extends React.Component {
	render() {
		console.log('rendering explore\n\n\n');
		return (
			<div className="explore-wrapper">

				<MixIndexContainer/>
			</div>
		);
	}
}

export default Explore;

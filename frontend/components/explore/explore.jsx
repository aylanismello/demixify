import React from 'react';
import MixIndexContainer from '../mix_index/mix_index_container';

class Explore extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log('rendering explore\n\n\n');
		return (
			<div className="explore-wrapper">


				{/* <div className="mix-index-container">
					<div className="mix-index-item">
						<div className="mix-index-creator">
						</div>
						HELLO
					</div>
				</div> */}

				<MixIndexContainer/>
			</div>
		);
	}
}

export default Explore;

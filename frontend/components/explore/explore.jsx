import React from 'react';
import MixIndexContainer from '../mix_index/mix_index_container';

class Explore extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log('rendering explore\n\n\n');
		return (
			<div>
			<div className="explore-wrapper">


				<h2 className="explore-text">
					<span>
					EXPLORE THE WORLD'S SOUNDS
					</span>
				</h2>

				{/* <div className="mix-index-container">
					<div className="mix-index-item">
						<div className="mix-index-creator">
						</div>
						HELLO
					</div>
				</div> */}


			</div>
			<MixIndexContainer/>
			</div>
		);
	}
}

export default Explore;

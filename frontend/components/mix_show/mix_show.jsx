import React from 'react';

class MixShow extends React.Component {
	constructor(props) {

		super(props);
		this.currentMix = props.currentMix;
		debugger;
	}

	render() {
		return (
			<div className="mix-show-container">
				<div className="mix-description-container">

				<div className="mix-pic">
					<img src={this.currentMix.mix.artwork_url}/>
				</div>

				</div>
			</div>
		);
	}
}

export default MixShow;

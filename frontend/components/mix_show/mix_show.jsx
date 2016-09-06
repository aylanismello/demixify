import React from 'react';

class MixShow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				YO CONTAINER {this.props.mixId}
			</div>
		);
	}
}

export default MixShow;

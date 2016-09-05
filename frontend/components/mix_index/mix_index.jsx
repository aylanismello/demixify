import React from 'react';
import MixIndexItem from '../mix_index_item/mix_index_item';

class MixIndex extends React.Component {

	constructor(props) {
		super(props);
		// debugger;
	}
	render() {
		return (
			<div className="mix-index-wrapper">
				<MixIndexItem mix={this.props.mix.mixes[0]}/>
			</div>
		);
	}

}

export default MixIndex;

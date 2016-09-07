import React from 'react';
import MixIndexItem from '../mix_index_item/mix_index_item';

class MixIndex extends React.Component {

	constructor(props) {
		super(props);
	}



	render() {
		debugger;

		return (
			<div className="mix-index-wrapper">
				<ul className="mix-index-container">
				{
					Object.keys(this.props.mix.mixes).map((mixId, idx) => {
						let mix = this.props.mix.mixes[mixId];

							return (
							<MixIndexItem setCurrentMix={this.props.setCurrentMix}
								key={idx} mix={mix} />
							);

						}
					)
				}
				</ul>
			</div>
		);
	}

}

export default MixIndex;

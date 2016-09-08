import React from 'react';
import MixIndexItem from '../mix_index_item/mix_index_item';

class MixIndex extends React.Component {

	constructor(props) {
		super(props);

		this.mixes = [];
	}


	componentWillReceiveProps() {
		// debugger;
		console.log(`RECEIVED PROPS -> ${this.props}!\n\n`);
	}


	render() {

		// console.log(`${this.props.filter.type}: ${this.props.filter.val}`);

		// if ()


		return (
			<div className="mix-index-wrapper">
				<ul className="mix-index-container">
				{
					Object.keys(this.props.mix.mixes).map((mixId, idx) => {
						let mix = this.props.mix.mixes[mixId];

							return (
							<MixIndexItem
								setCurrentMixId={this.props.setCurrentMixId}
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

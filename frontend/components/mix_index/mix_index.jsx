import React from 'react';
import MixIndexItem from '../mix_index_item/mix_index_item';

class MixIndex extends React.Component {

	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="mix-index-wrapper">
				<ul className="mix-index-container">
				{this.props.mix.mixes.map((mix, idx) => (
						<MixIndexItem getMix={this.props.getMix}
							key={idx} mix={mix} />
						)
					)
				}
				</ul>
			</div>
		);
	}

}

export default MixIndex;

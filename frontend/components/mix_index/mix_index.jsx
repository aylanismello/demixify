import React from 'react';
import MixIndexItem from '../mix_index_item/mix_index_item';

class MixIndex extends React.Component {

	constructor(props) {
		super(props);
		console.log('rendering mix index \n\n\n');
		debugger;
	}



	render() {
		return (
			<div className="mix-index-wrapper">
				<ul className="mix-index-container">
				{this.props.mix.mixes.map((mix, idx) => (
						<MixIndexItem className="mix-index-item" key={idx} mix={mix}/>
						)
					)
				}

				</ul>
			</div>
		);
	}

}

export default MixIndex;

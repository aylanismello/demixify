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


		let mixKeys = Object.keys(this.props.mix.mixes);
		let mixes = this.props.mix.mixes;

		let filterType = this.props.filter.type;
		let filterVal = this.props.filter.val;
		let likedMixes = this.props.likedMixes;

		if (filterType !== "") {
			if (filterType === "string") {
				console.log('\n\nupdate filter by str!!');
				let val = filterVal.toLowerCase();

				mixKeys = mixKeys.filter( mixKey => {

					return mixes[mixKey].mix.title.toLowerCase().includes(val);

				});

			} else if(filterType === "likes") {

				let newMixKeys = [];

				mixKeys.forEach ( mixKey => {
					if (likedMixes.includes(parseInt(mixKey))) {
						newMixKeys.push(mixKey);
					}
				});

				mixKeys = newMixKeys;

				console.log('filter by likes!');

			} else if (filterType === "user") {
				console.log('filter by user!');

				mixKeys = mixKeys.filter( mixKey => {
					return (mixes[mixKey].mix.user_id === this.props.currentUser.id);
				});

				// debugger;
			}


		} else if(filterType === "user"){
			console.log('filter by user!');



		} else{

			console.log('NO FILTER! show all');
		}



		return (
			<div className="mix-index-wrapper">
				<ul className="mix-index-container">
				{
					mixKeys.map((mixId, idx) => {
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

import React from 'react';

class MixShow extends React.Component {
	constructor(props) {

		super(props);
		this.currentMix = props.currentMix;
		this.trackCount = props.currentMix.tracks.length;
		// debugger;
	}

	render() {
		// debugger;
		let mixObj = this.currentMix;
		return (
			<div className="mix-show-container">
				<div className="mix-description-container">

				<div className="mix-pic">
					<img src={mixObj.mix.artwork_url}/>
				</div>

				<div className="mix-right">
						<div className="top-mix-details">
							<div className="mix-title">
								<h1>{mixObj.mix.title}</h1>
							</div>

							<div className="mix-details">
								{this.trackCount} tracks
							</div>

						</div>

						<div className="bottom-mix-details">
							<button className="like-button">
								LIKE
							</button>
						</div>
				</div>

				</div>

				<div className="tracklist-container">

					<div className="mix-item-creator">
						<div className="mix-item-creator-pic">
							<img src={mixObj.mix.user_img}/>
						</div>

						<div className="mix-item-create-text">
							DEMIXIFIED BY: {mixObj.mix.username}
						</div>

					</div>

					<div className="tracklist-description">
						<p className="description-text">
							{mixObj.mix.description}
						</p>

					</div>


				</div>

			</div>
		);
	}
}

export default MixShow;

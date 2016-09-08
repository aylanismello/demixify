import React from 'react';
import { hashHistory } from 'react-router';

class MixIndexItem extends React.Component {

	constructor(props) {
		super(props);

		// debugger;
		this.mix = props.mix.mix;
		this.handleShowRedirect = this.handleShowRedirect.bind(this);
	}

	handleShowRedirect() {
		// console.log('is this working');
		// debugger;
		const args = arguments;
		return e => {
			const mixId = args[0];

			// now we do not update the mix, we set the currentTrack to the one clicked on



			this.props.setCurrentMixId(mixId);
			// this.props.getMix(mixId);
			// update currentMix


			hashHistory.push(`/mixes/${mixId}`);
		};
	}

	render() {

		let likedUserCount = this.mix.liked_users.length;

		return(
			<div className="mix-index-item">


				<div className="mix-item-creator">
					<div className="mix-item-creator-pic">
						<img src={this.mix.user_img}/>
					</div>

					<div className="mix-item-create-text">
						DEMIXIFIED BY: {this.mix.username}
					</div>

				</div>


				<div className="mix-item-detail cf">
					<div className="mix-avatar-wrapper">
						<div className="mix-avatar">
							<img  onClick={this.handleShowRedirect(this.mix.id)}
								src={this.mix.artist_avatar}/>
						</div>
					</div>

					<div className="mix-text">
						<h2 onClick={this.handleShowRedirect(this.mix.id)}
							className="mix-item-title"> {this.mix.title} </h2>



						<div className="mix-item-dj">
									Like Count : {likedUserCount}
									<h2> Mixed by </h2>
									<h3 className="dj-name">
										{this.mix.artist_username}
									</h3>
						</div>
					</div>
				</div>

			</div>
		);
	}

}

export default MixIndexItem;

import React from 'react';
import { hashHistory } from 'react-router';

class MixIndexItem extends React.Component {

	constructor(props) {
		super(props);

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
			hashHistory.push(`/mixes/${mixId}`);
		};
	}

	render() {
		let likedUserCount = this.props.mix.mix.liked_users.length;


		return(
			<div className="mix-index-item">


				<div className="mix-item-creator">
					<div className="mix-item-creator-pic">
						<img src={this.props.mix.mix.user_img}/>
					</div>

					<div className="mix-item-create-text">
						DEMIXIFIED BY: {this.props.mix.mix.username}
					</div>

				</div>


				<div className="mix-item-detail cf">
					<div className="mix-avatar-wrapper">
						<div className="mix-avatar">
							<img  onClick={this.handleShowRedirect(this.props.mix.mix.id)}
								src={this.props.mix.mix.artist_avatar}/>
						</div>
					</div>

					<div className="mix-text">
						<h2 onClick={this.handleShowRedirect(this.props.mix.mix.id)}
							className="mix-item-title"> {this.props.mix.mix.title} </h2>



						<div className="mix-item-dj">
									Like Count : {likedUserCount}
									<h2> Mixed by </h2>
									<h3 className="dj-name">
										{this.props.mix.mix.artist_username}
									</h3>
						</div>
					</div>
				</div>

			</div>
		);
	}

}

export default MixIndexItem;

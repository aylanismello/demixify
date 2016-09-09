import React from 'react';
import { hashHistory } from 'react-router';


const LIKE_URL = 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401279/like_qsf88g.png';
const TRACK_URL = 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473414939/cassette_wc1ayg.png';
const PLAY_URL = 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401282/play_ldwhar.png';
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
		let trackCount = this.props.mix.tracks.length;


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
						<div className="mix-avatar" onClick={this.handleShowRedirect(this.props.mix.mix.id)}>

						{/* <div className="overlay">
						</div> */}


							<img
								src={this.props.mix.mix.artwork_url}/>

								<h2 className="image-text">
									<span>
									PLAY
									</span>
								</h2>

						</div>
					</div>

					<div className="mix-text">
						<h2 onClick={this.handleShowRedirect(this.props.mix.mix.id)}
							className="mix-item-title"> {this.props.mix.mix.title} </h2>



						<div className="mix-item-dj">
									<div className="index-item-like-icon">
											<img src={LIKE_URL}/>
									</div>
										 <p className="liked-user-count">{likedUserCount} </p>



										<div className="index-item-track-icon">
											<img src={TRACK_URL}/>
										</div>
										 <p className="track-count">{trackCount} </p>


									<h3 className="dj-name">
									</h3>
						</div>
					</div>
				</div>

			</div>
		);
	}

}

export default MixIndexItem;

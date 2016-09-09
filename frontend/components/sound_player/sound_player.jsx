import React from 'react';
import LikeContainer from '../like/like_container';
import SoundCloudAudio from 'soundcloud-audio';
import { hashHistory } from 'react-router';
const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'http://bit.ly/2cd9iUT';


const UrlConstants = {
	NEXT: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401275/next_dym71x.png',
	PLAY: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401282/play_ldwhar.png',
	PAUSE: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401283/pause_ixrfk5.png'
};


class SoundPlayer extends React.Component {

	constructor(props) {
		super(props);
		const sc = new SoundCloudAudio(clientId);



		this.setNewDemix = this.setNewDemix.bind(this);
		this.isNewDemix = this.isNewDemix.bind(this);

		this.togglePlay = this.togglePlay.bind(this);
		this.playNext = this.playNext.bind(this);
		this.renderTrackDetails = this.renderTrackDetails.bind(this);
		this.playAtIdx = this.playAtIdx.bind(this);

		this.toggleDisplay = this.toggleDisplay.bind(this);
		this.routeToShow = this.routeToShow.bind(this);
		this.getStyle = this.getStyle.bind(this);
		this.checkForShit = this.checkForShit.bind(this);





		this.renderPlayingState = this.renderPlayingState.bind(this);
		this.getPlayingImage = this.getPlayingImage.bind(this);
		// debugger;


		this.state = {
			playing: false,
			sc: sc,
			tracks: [],
			trackIdx: 0,
			mixTitle: "",
			mixImg: "http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473059378/soundcloud-gray_kvunvw.png",
			mixArtist: "",
			mixId: 0,
			display: "none",
			logged_in: false
		};
	}

	componentWillReceiveProps() {
		// console.log(`currentUser id is now ${this.props.currentUser.id}`);
		// if (this.props.currentUser.id) {
		// 	this.setState({logged_in: true});
		// } else if (this.state.logged_in === true && !this.props.currentUser.id) {
		// 	this.setState({logged_in: false});
		// 	this.toggleDisplay("off");
		// }


	}



	togglePlay() {

		if (this.state.playing) {
			this.setState({playing: false});
			this.state.sc.pause();
		} else {
			this.setState({playing: true});
			this.state.sc.play();

		}
	}

	renderPlayingState() {

		// return this.state.playing ? "PLAYING" : "PAUSED";
	}

	getPlayingImage() {
		return this.state.playing ? UrlConstants.PLAY : UrlConstants.PAUSE;
	}


	toggleDisplay(onOrOff) {

			let displayState;
			if (onOrOff === "on"){
				displayState = `block`;
			} else {
				displayState = `none`;
			}

			this.setState({
				display: displayState
			});

	}


	playAtIdx(idx) {

		let currentMix = this.props.mixes[this.props.currentMixId];


		let currentTracks = currentMix.tracks;
		let currentMixTitle = currentMix.mix.title;
		let currentMixImg = currentMix.mix.artwork_url;
		let currentMixArtist = currentMix.mix.artist_username;
		let currentMixId = currentMix.mix.id;

		this.togglePlay();


		this.state.sc.resolve(this.state.tracks[idx].permalink_url, (track) => {

			this.setState({mixTitle: currentMixTitle,
				trackIdx: idx, mixImg: currentMixImg,
				mixArtist: currentMixArtist,
				mixId: currentMixId});

				this.togglePlay();
		});

	}


	playNext() {
		let newIdx = this.state.trackIdx + 1;
		if (newIdx < this.state.tracks.length){
			this.playAtIdx(newIdx);
		}

	}


	renderTrackDetails() {
				let trackTitle, artistUsername, mixTitle, artistPic;

				if (this.state.tracks.length === 0){
					trackTitle = "";
					artistUsername = "";
					mixTitle = "";
					artistPic = this.state.mixImg;
				} else {
					trackTitle = this.state.tracks[this.state.trackIdx].title;
					artistUsername = this.state.tracks[this.state.trackIdx].artist_username;
					artistPic = this.state.tracks[this.state.trackIdx].artist_avatar;
					mixTitle = this.state.mixTitle;
				}


				return(

						<div className="player-track-details cf">

								<div className="artist-pic">
									<img src={artistPic} />
								</div>

								<div className="track-text">
									<div className="track-details-top">
										<h2 className="track-title">
											{trackTitle}
										</h2>
										<h2 className="track-artist">
										{artistUsername}
										</h2>
									</div>

									<div className="mix-details-bottom">
										<h2 className="mix-title"> {mixTitle} </h2>
									</div>
								</div>
							</div>

					);
	}

	isNewDemix(storeMixTitle, storeMixTracksLength) {

		if (storeMixTracksLength > 0) {
			if (storeMixTitle !== this.state.mixTitle) {
				return true;
			} else {
				return false;
			}
		}

	}


	checkForShit() {
		let hasMixes = (Object.keys(this.props.mixes).length > 0);


		if (hasMixes && this.props.currentMixId !== -1){
			this.setNewDemix(this.props.currentMixId);
		}

	}


	setNewDemix(mixId) {

		if(this.state.display === "none") {
			this.toggleDisplay("on");
		}
		let currentMix = this.props.mixes[mixId];


		let currentTracks = currentMix.tracks;


		let currentMixTitle = currentMix.mix.title;
		let currentMixImg = currentMix.mix.artwork_url;
		let currentMixArtist = currentMix.mix.artist_username;
		let currentMixId = currentMix.mix.id;
		if (this.isNewDemix(currentMixTitle, currentTracks.length)){

			let orderedTracks = [];
			currentTracks.map((track, idx) => {
				orderedTracks[track.track_number - 1] = track;
			});



			let firstTrackUrl = orderedTracks[0].permalink_url;

			this.state.sc.resolve(firstTrackUrl, (track) => {

				this.setState({mixTitle: currentMixTitle,
					trackIdx: 0, mixImg: currentMixImg,
					mixArtist: currentMixArtist,
					mixId: currentMixId, tracks: orderedTracks});

					this.state.sc.on('ended', () => {
						this.playNext();
					});

					// this.togglePlay();
					// this.togglePlay();
			});

		}
	}

	routeToShow() {
		// debugger;
		const args = arguments;
		return e => {
			const mixId = args[0];
			hashHistory.push(`/mixes/${mixId}`);
		};
	}

	getStyle() {
		return {
			display: this.state.display
		};
	}

	render() {


		this.checkForShit();
		let displayStyle = this.getStyle();

		return (

			<div className="sound-player-container cf" style={displayStyle}>
				<div className="sound-player-nav-bar">

					<div className="player-controls cf">
						<div className="mix-pic"
						onClick={this.routeToShow(this.props.currentMixId)}>
							<img value={this.state.mixId} src={this.state.mixImg} />
						</div>


						<div className="play-button">

							<img src={this.getPlayingImage()}
								onClick={this.togglePlay}/>

						</div>


						<div className="next-button">

							<img src={UrlConstants.NEXT} onClick={this.playNext}/>

						</div>

						<LikeContainer/>


					</div>
					{this.renderTrackDetails()}

				</div>

			</div>

		);
	}
}



export default SoundPlayer;

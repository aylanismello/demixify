import React from 'react';
import LikeContainer from '../like/like_container';
import SoundCloudAudio from 'soundcloud-audio';
import animateCss from 'animate.css-js';
import { hashHistory } from 'react-router';
const clientId = 'a13f1496f3ee0b36504328dde940b256';


const UrlConstants = {
	NEXT: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401275/next_dym71x.png',
	PLAY: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401282/play_ldwhar.png',
	PAUSE: 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401283/pause_ixrfk5.png',
	LOGO: `http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473441056/demixify_logo_njitun.png`
};


class SoundPlayer extends React.Component {

	constructor(props) {
		super(props);
		const sc = new SoundCloudAudio(clientId);

		this.togglePlay = this.togglePlay.bind(this);
		this.playNext = this.playNext.bind(this);
		this.renderTrackDetails = this.renderTrackDetails.bind(this);
		this.playAtIdx = this.playAtIdx.bind(this);
		this.routeToShow = this.routeToShow.bind(this);
		this.getPlayingImage = this.getPlayingImage.bind(this);

		this.playedYet = false;


		this.state = {
			playing: false,
			sc: sc,
			tracks: [],
			trackIdx: 0,
			mixTitle: "TRACK",
			mixImg: UrlConstants.LOGO,
			mixArtist: "LOADING",
			mixId: -2,
			logged_in: false,
			loading: false
		};
	}

	componentWillReceiveProps(props) {

		if (props.currentMixId !== this.state.mixId || !this.playedYet) {

			// console.log('whattt');


			if (props.currentMixId !== -1 || !this.playedYet) {

				this.playedYet = true;



				let currentMix = props.mixes[props.currentMixId];
				let currentTracks =  [];

				if (currentMix.tracks) {
					currentTracks = currentMix.tracks;
				}


				let currentMixTitle = currentMix.mix.title;
				let currentMixImg = currentMix.mix.artwork_url;
				let currentMixArtist = currentMix.mix.artist_username;
				let currentMixId = currentMix.mix.id;

				let orderedTracks = [];
				currentTracks.map((track, idx) => {
					orderedTracks[track.track_number - 1] = track;
				});

			let idx = 0;

			this.state.sc.resolve(orderedTracks[idx].permalink_url, (track) => {

				this.setState({mixTitle: currentMixTitle,
					trackIdx: idx, mixImg: currentMixImg,
					mixArtist: currentMixArtist,
					mixId: props.currentMixId, tracks: orderedTracks});

					this.state.sc.on('ended', () => {
						this.playNext();
					});


					this.togglePlay();
			});

		} // assuming first track to be played..

	}
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


	getPlayingImage() {
		return this.state.playing ? UrlConstants.PAUSE : UrlConstants.PLAY;
	}



	playAtIdx(idx) {

		let currentMix = this.props.mixes[this.props.currentMixId];


		let currentTracks = currentMix.tracks;
		let currentMixTitle = currentMix.mix.title;
		let currentMixImg = currentMix.mix.artwork_url;
		let currentMixArtist = currentMix.mix.artist_username;
		let currentMixId = currentMix.mix.id;

		this.togglePlay();

		this.setState({loading: true});

		// debugger;



		this.state.sc.resolve(this.state.tracks[idx].permalink_url, (track) => {

			this.setState({mixTitle: currentMixTitle,
				trackIdx: idx, mixImg: currentMixImg,
				mixArtist: currentMixArtist,
				mixId: currentMixId, loading: false});

				this.state.sc.on('ended', () => {
					this.playNext();
				});

				// debugger;


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



	routeToShow() {
		const args = arguments;
		return e => {
			const mixId = args[0];
			hashHistory.push(`/mixes/${mixId}`);
		};
	}

	renderPlayButton() {
	}



	render() {
		// debugger;

		if(this.props.playerOpen){
			return (

				<div className="sound-player-container cf">
					<div className="sound-player-nav-bar">

						<div className="player-controls cf">

							<div className="mix-pic"
							onClick={this.routeToShow(this.props.currentMixId)}>
								<img value={this.state.mixId}
									src={this.state.mixImg} />
							</div>


							<div className="play-button">

								<img src={this.getPlayingImage()}
									onClick={this.togglePlay}/>

							</div>


							<div className="next-button">
								<img src={UrlConstants.NEXT}
									onClick={this.playNext}/>
							</div>

							<LikeContainer />

						</div>
						{this.renderTrackDetails()}

					</div>

				</div>

			);
		} else {
			return (
				<div>
				</div>
			);
		}


	}
}



export default SoundPlayer;

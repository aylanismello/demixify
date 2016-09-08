import React from 'react';
import LikeContainer from '../like/like_container';
import SoundCloudAudio from 'soundcloud-audio';
import { hashHistory } from 'react-router';
const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'http://bit.ly/2cd9iUT';

class SoundPlayer extends React.Component {

	constructor(props) {
		super(props);
		const sc = new SoundCloudAudio(clientId);


		// debugger;

		this.setNewDemix = this.setNewDemix.bind(this);
		this.isNewDemix = this.isNewDemix.bind(this);

		this.togglePlay = this.togglePlay.bind(this);
		this.playNext = this.playNext.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.renderTrackDetails = this.renderTrackDetails.bind(this);
		this.playAtIdx = this.playAtIdx.bind(this);

		this.toggleDisplay = this.toggleDisplay(this);
		this.routeToShow = this.routeToShow.bind(this);
		this.getStyle = this.getStyle.bind(this);
		this.checkForShit = this.checkForShit.bind(this);





		this.renderPlayingState = this.renderPlayingState.bind(this);
		this.renderLikedState = this.renderLikedState.bind(this);

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
			display: "block",
			liked: false
		};
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

		return this.state.playing ? "PLAYING" : "PAUSED";
	}

	renderLikedState() {
		// also get initial liked state
		// let likedState = (this.props.likedMixes.include(this.props.currentMixId));




		// debugger;
		// console.log(`liked state is ${likedState}`);
		return this.state.liked ? "UNLIKE" : "LIKE";
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

	handleLike() {

		let newLikeState = !this.state.liked;
		this.setState({liked: newLikeState});

		if (newLikeState) { //this is true, so this is to destroy like
			this.props.createLike(this.props.currentMixId);
		} else {
			this.props.deleteLike(this.props.currentMixId);
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


	componentWillMount() {

		console.log('CHECK FOR INITIAL LIKE STATUS');

		if (this.props.likedMixes
			&& this.props.likedMixes.includes(this.props.currentMixId)) {
			console.log('THIS IS LIKE IN THE DB');
			this.setState({liked: true});
		} else {
			console.log('THIS IS NOT LIKE IN THE DB');
			this.setState({liked: false});
		}


	}

	checkForShit() {
		let hasMixes = (Object.keys(this.props.mixes).length > 0);


		if (hasMixes && this.props.currentMixId !== -1){
			this.setNewDemix(this.props.currentMixId);
		}

	}


	setNewDemix(mixId) {
		let currentMix = this.props.mixes[mixId];


		let currentTracks = currentMix.tracks;
		// let currentTracks = this.props.mixes[mixId].tracks;

		// let
		// let currentTracks = this.props.currentMix.tracks;





		let currentMixTitle = currentMix.mix.title;
		let currentMixImg = currentMix.mix.artwork_url;
		let currentMixArtist = currentMix.mix.artist_username;
		let currentMixId = currentMix.mix.id;
		// let currentMixTitle = this.props.currentMix.mix.title;
		// let currentMixImg = this.props.currentMix.mix.artwork_url;
		// let currentMixArtist = this.props.currentMix.mix.artist_username;
		// let currentMixId = this.props.currentMix.mix.id;


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

					this.togglePlay();
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

						<button value="play" onClick={this.togglePlay}
							className="play-button">

								{this.renderPlayingState()}
						</button>
						<button value="NEXT" onClick={this.playNext}
							className="next-button">

							NEXT
						</button>



						<LikeContainer/>


					</div>
					{this.renderTrackDetails()}

				</div>

			</div>

		);
	}
}



export default SoundPlayer;

import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'http://bit.ly/2cd9iUT';

class SoundPlayer extends React.Component {

	constructor(props) {
		super(props);
		const sc = new SoundCloudAudio(clientId);


		this.setNewDemix = this.setNewDemix.bind(this);
		this.isNewDemix = this.isNewDemix.bind(this);

		this.togglePlay = this.togglePlay.bind(this);
		this.playNext = this.playNext.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.renderTrackDetails = this.renderTrackDetails.bind(this);
		this.playAtIdx = this.playAtIdx.bind(this);

		this.renderPlayingState = this.renderPlayingState.bind(this);
		this.state = {
			playing: false,
			sc: sc,
			tracks: [],
			trackIdx: 0,
			mixTitle: "",
			mixImg: "http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473059378/soundcloud-gray_kvunvw.png",
			mixArtist: "",
			mixId: 0
		};
	}





	togglePlay() {

		if (this.state.playing) {
			this.setState({playing: false});
			this.state.sc.pause();
			console.log('pausing');
		} else {
			this.setState({playing: true});
			this.state.sc.play();

			console.log('playing track');

		}
	}

	renderPlayingState() {

		return this.state.playing ? "PLAYING" : "PAUSE";
	}



	playAtIdx(idx) {
		let currentTracks = this.props.currentMix.tracks;
		let currentMixTitle = this.props.currentMix.mix.title;
		let currentMixImg = this.props.currentMix.mix.artwork_url;
		let currentMixArtist = this.props.currentMix.mix.artist_username;
		let currentMixId = this.props.currentMix.mix.id;

		// this.sc.pause();
		this.togglePlay();
		// this.sc.pause();
		// pause before we change

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
										<h2 className="mix-title"> Mix: {mixTitle} </h2>
									</div>
								</div>
							</div>

					);
	}

	isNewDemix(storeMixTitle, storeMixTracksLength) {
		// let currentMix = this.props.currentMix;
		// console.log(`global mix is ${storeMixTitle}`);
		// console.log(`this player's loaded mix is ${this.state.mixTitle}`);

		if (storeMixTracksLength > 0) {
			if (storeMixTitle !== this.state.mixTitle) {
				return true;
			} else {
				return false;
			}
		}

	}

	setNewDemix() {
		let currentTracks = this.props.currentMix.tracks;
		let currentMixTitle = this.props.currentMix.mix.title;
		let currentMixImg = this.props.currentMix.mix.artwork_url;
		let currentMixArtist = this.props.currentMix.mix.artist_username;
		let currentMixId = this.props.currentMix.mix.id;


		// console.log(`is new demix? ${this.isNewDemix(currentMixTitle, currentTracks.length)}\n\n`);


		// if(currentTracks.length > 0 && this.state.tracks.length === 0) {
		if (this.isNewDemix(currentMixTitle, currentTracks.length)){

			// console.log('detected new tracks!');
			let orderedTracks = [];

			currentTracks.map((track, idx) => {
				orderedTracks[track.track_number - 1] = track;
			});




			let firstTrackUrl = orderedTracks[0].permalink_url;

			this.state.sc.resolve(firstTrackUrl, (track) => {

				this.setState({mixTitle: currentMixTitle,
					trackIdx: 0, mixImg: currentMixImg, mixArtist: currentMixArtist,
					mixId: currentMixId, tracks: orderedTracks});

				this.togglePlay();
			});



		}
	}



	render() {

		this.setNewDemix();
		return (

			<div className="sound-player-container cf">


				<div className="player-controls cf">
					<div className="mix-pic">
						<img value={this.state.mixId} src={this.state.mixImg}/>
					</div>

					<button value="play" onClick={this.togglePlay}
						className="play-button">

							{this.renderPlayingState()}
					</button>
					<button value="NEXT" onClick={this.playNext}
						className="next-button">

						NEXT
					</button>

					<button value="LIKE" onClick={this.handleLike}
						className="like-button">
						LIKE
					</button>

				</div>
				{this.renderTrackDetails()}









			</div>

		);
	}
}



export default SoundPlayer;

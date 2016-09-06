import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'http://bit.ly/2cd9iUT';

class SoundPlayer extends React.Component {

	constructor(props) {
		super(props);
		const sc = new SoundCloudAudio(clientId);

	//
	//
	//
	// 	sc.resolve(resolveUrl, function(track) {
	// 		console.log(track);
	//
	// 		// sc.play();
	// 		// sc.pause();
	// 		// sc
	// 	});

		// this.sc = sc;
		// debugger;

		this.setFirstSong = this.setFirstSong.bind(this);

		this.togglePlay = this.togglePlay.bind(this);
		this.renderPlayingState = this.renderPlayingState.bind(this);
		this.state = {
			playing: false,
			resolveUrl: "",
			sc: sc
		};
	}





	togglePlay() {

		if (this.state.playing) {
			this.setState({playing: false});
			this.sc.pause();
			console.log('pausing');
		} else {
			this.setState({playing: true});
			this.sc.play();
			console.log('playing');

		}
	}

	renderPlayingState() {

		return this.state.playing ? "PLAYING" : "PAUSE";
	}


	setFirstSong() {
		let currentTracks = this.props.currentMix.tracks;
		if(currentTracks.length > 0) {
			if(this.state.resolveUrl !== currentTracks[0].permalink_url) {
				console.log(`setting song to ${currentTracks[0].title}`);

				this.setState({resolveUrl: currentTracks[0].permalink_url});

				this.state.sc.resolve(currentTracks[0].permalink_url, (track) => {
					console.log(track);
					 this.state.sc.play();
				});

			} else {

			}
		}
		// if(this.state.resolveUrl !== currentMix.tracks)
	}



	render() {

		console.log('SOUND PLAYER RENDERS');

		return (

			<div className="sound-player-container cf">

				{this.setFirstSong()}
				<button value="play" onClick={this.togglePlay}
					className="play-button">

						{this.renderPlayingState()}
				</button>

			</div>

		);
	}
}



export default SoundPlayer;

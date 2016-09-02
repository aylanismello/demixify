import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import {SoundPlayerContainer, PlayButton, Progress} from 'react-soundplayer/addons';




const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'http://bit.ly/2cd9iUT';

	// let scPlayer = new SoundCloudAudio('a13f1496f3ee0b36504328dde940b256');
	// scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});
class TrackInfo extends React.Component {
  render() {
      let { track } = this.props;

      if (!track) {
          return <div>Loading...</div>;
      }

      return (
          <div>
              <h2>{track.title}</h2>
              <h3>{track.user.username}</h3>
          </div>
      );
  }
}

class PlayPause extends React.Component {

  togglePlay() {
      let { playing, soundCloudAudio } = this.props;
      if (playing) {
          soundCloudAudio.pause();
      } else {
          soundCloudAudio.play();
      }
  }


  render() {
			// debugger;
      let { playing } = this.props;
      let text = playing ? 'Pause' : 'Play';

      // if (!track) {
          // return <div>Loading...</div>;
      // }

      return (
          <button onClick={this.togglePlay.bind(this)}>
              {text}
          </button>
      );
  }
}




class CustomPlayer extends React.Component {
  render() {
      return (
          <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
              <TrackInfo />
              <PlayPause />
							<Progress className="yo" />
          </SoundPlayerContainer>
      );
  }
}

export default CustomPlayer;

import React, { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer } from 'react-soundplayer/components';


const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'https://soundcloud.com/owslaofficial/getter-ghastly-666';


class Player extends Component {

    constructor() {
      this.handleTest = this.handleTest.bind(this);
    }

    handleTest() {
      alert('ok');
    }


    render() {
        let { track, currentTime } = this.props;
        return (
            <div className="p1 mb3 mt3 flex flex-center bg-darken-1 red rounded">
                <PlayButton className="flex-none h4 mr2 button button-transparent button-grow rounded" {...this.props} onKeyDown={this.handleTest}/>
                <h2 className="h5 nowrap caps flex-auto m0">{track ? track.title : 'Loading...'}</h2>
                <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...this.props} />
            </div>
        );
    }
}

class BasicSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

export default BasicSoundPlayer;

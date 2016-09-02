import React, { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Progress } from 'react-soundplayer/components';


const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'https://soundcloud.com/owslaofficial/getter-ghastly-666';

class Player extends Component {

	constructor(props) {
		super(props);
		this.handleIt = this.handleIt.bind(this);
	}

	handleIt() {
		alert('sup');
	}

    render() {
        let { track, currentTime, duration } = this.props;

        return (
            <div className="p2 border navy mt1 mb3 flex flex-center rounded">
                <PlayButton className="flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" {...this.props} onKeyDown={this.handleIt}/>

                <div className="flex-auto">
                    <h2 className="h4 nowrap m0">{track ? track.user.username : ''}</h2>
                    <h2 className="h4 nowrap caps m0">{track ? track.title : ''}</h2>

                    <Progress
                        className="mt1 mb1 rounded"
                        innerClassName="rounded-left"
                        value={(currentTime / duration) * 100 || 0}
                        {...this.props}
                    />

                </div>
            </div>
        );
    }
}

class FirstSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

// ProgressSoundPlayer.propTypes = {
//     resolveUrl: PropTypes.string.isRequired,
//     clientId: PropTypes.string.isRequired
// };

export default FirstSoundPlayer;

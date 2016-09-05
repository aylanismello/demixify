import React, { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, NextButton, Progress } from 'react-soundplayer/components';
import {VARS, DUMMY_DATA} from '../../soundcloud_util/vars';


// const clientId = 'a13f1496f3ee0b36504328dde940b256';
const resolveUrl = 'https://soundcloud.com/owslaofficial/getter-ghastly-666';

class Player extends Component {

	constructor(props) {
		super(props);
		debugger;
		this.handleIt = this.handleIt.bind(this);
		this.state = {
			activeIndex: 0
		};
	}

	handleIt() {
		alert('sup');
	}

	nextIndex() {
		let { activeIndex } = this.state;
		// debugger;
		console.log(this.props);
		let { playlist } = this.props;
		if (activeIndex >= playlist.tracks.length - 1) {
				return;
		}
		if (activeIndex || activeIndex === 0) {
				this.setState({activeIndex: ++activeIndex});
		}
		alert('next track');
	}

    render() {
        let { track, currentTime, duration,  } = this.props;

        return (
            <div className="p2 border navy mt1 mb3 flex flex-center rounded">
                <PlayButton
									className="flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle"
										{...this.props} onKeyDown={this.handleIt}/>

								<NextButton
										className="flex-none h3 button mr2 button-narrow button-transparent button-grow rounded"
										onNextClick={this.nextIndex.bind(this)}
										{...this.props}
								/>

                <div className="flex-auto">
                    <h2 className="h4 nowrap m0">
											{track ? track.user.username : ''}
										</h2>
                    <h2 className="h4 nowrap caps m0">{
												track ? track.title : ''}
											</h2>

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

		constructor(props) {
			super(props);
			this.playlist = {tracks: [DUMMY_DATA.RESOLVE_URL, resolveUrl]};
		}
    render() {
        return (
            <SoundPlayerContainer
							resolveUrl={DUMMY_DATA.RESOLVE_URL}
							clientId={VARS.CLIENT_ID}>
                <Player playlist={this.playlist}/>
            </SoundPlayerContainer>
        );
    }
}

// ProgressSoundPlayer.propTypes = {
//     resolveUrl: PropTypes.string.isRequired,
//     clientId: PropTypes.string.isRequired
// };

export default FirstSoundPlayer;

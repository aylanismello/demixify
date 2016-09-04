import React from 'react';
import {searchByTrack} from '../../soundcloud_util/search';

class MixInputField extends React.Component {
	constructor(props) {
		super(props);

		this.suggestions = [{title: ''}, {title: ''}, {title: ''}];

		this.state = {
			trackName: "",
			trackObj: {},
			suggestions: this.suggestions
		};




		this.makeFakeTrack = this.makeFakeTrack.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
		this.selectTrack = this.selectTrack.bind(this);

		// this.makeFakeTrack('dirty vibe');


	}

	makeFakeTrack(suggestionsIdx, updateMixFormCB) {

		// debugger;
		let name = this.state.suggestions[suggestionsIdx].title;

		const onReceivedTracks = (tracks) => {
			const soundcloudTrackObj = tracks[0];

			this.setState({
				trackObj: soundcloudTrackObj
			});

			updateMixFormCB(soundcloudTrackObj);

		};

		searchByTrack(name, onReceivedTracks);
	}


	handleInputUpdate(){
		return e => {

			const updateSearchFilter = (tracks) => {

				let suggestedTracks = tracks.slice(0, 3);
				this.setState(
					{suggestions: suggestedTracks,
						trackName: e.currentTarget.value}
				);

			};
			searchByTrack(e.currentTarget.value, updateSearchFilter);
		};

	}


	selectTrack() {

		return e => {

			const updateMixFormCB = (trackObj) => {
				this.props.updateCB(trackObj, parseInt(this.props.idx));
				this.setState({trackName: `track ${trackObj.title}`});
			};

			if (e.currentTarget.value === undefined) {
				console.log('cant do nothing');
			} else {
				this.makeFakeTrack(e.currentTarget.value, updateMixFormCB);
			}

		};
	}




	renderSuggestions() {
		// debugger;
		return(
			<div className="track-suggestions">


			{		this.suggestions.map((sug, idx) => {

						return (

							<li className="suggestion-item cf" value={idx}
									onClick={this.selectTrack()} key={idx}>
								<p>{this.state.suggestions[idx].title}</p>

								<img
								 src={this.state.suggestions[idx].artwork_url}
									/>
							</li>

						);
					})
				}

			</div>
		);
	}




	render() {
		return(

			<div className="mix-input-container">

				<input type="text"
				value={this.state.trackName}
				onChange={this.handleInputUpdate()}
				className="mix-input"
				placeholder="Type track name here to search!"/>

				{ this.renderSuggestions()  }
			</div>
		);

	}
}

export default MixInputField;

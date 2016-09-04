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

	makeFakeTrack(name, updateMixFormCB) {

		const onReceivedTracks = (tracks) => {
			const soundcloudTrackObj = tracks[0];
			// console.log(`received ${soundcloudTrackObj}!`);

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

			this.makeFakeTrack('dirty vibe', updateMixFormCB);

		};
	}









	renderSuggestions() {
		// debugger;
		return(
			<div className="track-suggestions">
				<ul>

			{		this.suggestions.map((sug, idx) => {

						return (
							<li value={idx} onClick={this.selectTrack()} key={idx * idx}>
								{this.state.suggestions[idx].title}
								<img
								 src={this.state.suggestions[idx].artwork_url}
									/>
							</li>
						);
					})
				}
				</ul>
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

import React from 'react';
import {searchByTrack} from '../../soundcloud_util/search';


const suggestionsSize = 5;

class MixInputField extends React.Component {
	constructor(props) {
		super(props);

		this.nullSuggestions = Array(suggestionsSize).fill({title: ''});
		this.state = {
			trackName: "",
			trackObj: {},
			suggestions: this.nullSuggestions
		};



		this.getPlaceholder = this.getPlaceholder.bind(this);
		this.makeHeater = this.makeHeater.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
		this.handleInputUpdate = this.handleInputUpdate.bind(this);
		this.renderSuggestions = this.renderSuggestions.bind(this);
		this.selectTrack = this.selectTrack.bind(this);

	}

	getPlaceholder() {
		return `type ${this.props.mixType} name here to search!`;
	}

	makeHeater(suggestionsIdx, updateMixFormCB) {
		let name = this.state.suggestions[suggestionsIdx].title;

		const onReceivedTracks = (tracks) => {
			const soundcloudTrackObj = tracks[0];

			this.setState({
				trackObj: soundcloudTrackObj,
				suggestions: Array(suggestionsSize).fill({title: ''})
			});

			updateMixFormCB(soundcloudTrackObj);
		};

		searchByTrack(name, onReceivedTracks, this.props.mixType);
	}


	handleInputUpdate(){
		// console.log('received nothin');
		return e => {

			// e.persist();

			const updateSearchFilter = (tracks) => {
				// debugger;

				let suggestedTracks = tracks.slice(0, 5);
				this.setState(
					{suggestions: suggestedTracks,
						trackName: e.currentTarget.value}
				);

			};
			searchByTrack(e.currentTarget.value, updateSearchFilter, this.props.mixType);
		};

	}


	selectTrack() {

		return e => {

			const updateMixFormCB = (trackObj) => {
				this.props.updateCB(trackObj, parseInt(this.props.idx));
				this.setState({trackName: `${trackObj.title}`});
			};

			if (e.currentTarget.value === undefined) {
			} else {
				this.makeHeater(e.currentTarget.value, updateMixFormCB);
			}

		};
	}




	renderSuggestions() {
		// debugger;
		return(
			<div className="track-suggestions">


			{		this.nullSuggestions.map((sug, idx) => {

						let artworkUrl = this.state.suggestions[idx].artwork_url;

						//  this breaks updating inputField apparently
						// if (this.state.suggestions[idx].title !== '' && !artworkUrl) {
						// 	console.log(`${this.state.suggestions[idx].title} has no artwork`);
						// 	artworkUrl = this.state.user.avatar_url;
						// }

						return (

							<li className="suggestion-item cf" value={idx}
									onClick={this.selectTrack()} key={idx}>
								<p>{this.state.suggestions[idx].title}</p>

								{/* <img
								 src={artworkUrl}
									/> */}
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
				placeholder={this.getPlaceholder()}/>

				{ this.renderSuggestions()  }
			</div>
		);

	}
}

export default MixInputField;

import React from 'react';
import { Link, hashHistory } from 'react-router';
import {seedTracks} from '../../soundcloud_util/seederTracks';
import * as _ from 'lodash';
import {searchByTrack} from '../../soundcloud_util/search';
import MixInputField from '../mix_input_field/mix_input_field';


class MixForm extends React.Component {
	constructor(props) {

		super(props);

		let tracks = [{}, {}, {}];
		this.state = {
			mix: {},
			description: "",
			tracks: tracks,
			user_id: props.currentUser.id,
			artwork_url: "http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473059378/soundcloud-gray_kvunvw.png"
		};

		this.tracks = tracks;

		this.handleMixSubmit = this.handleMixSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.makeTrackInput = this.makeTrackInput.bind(this);
		this.renderTrackInputs = this.renderTrackInputs.bind(this);

	}


	renderErrors(){
		let errorTexts;
		if (this.props.errors.responseJSON){
			errorTexts = JSON.parse(this.props.errors.responseText);
		} else {
			errorTexts = [];
		}
		// reset these errors so they don't print again

		return(
			<ul>
				{errorTexts.map((errorText, idx) => {
						return (
							<li key={idx}>
								{errorText}
							</li>
						);
					})
				}
			</ul>
		);
	}

	update(field) {
		return e => {
			this.setState({[field]: e.currentTarget.value});
		};
	}


	updateTrack(number, field) {
		// if we started typing again, our name gets set back and unkown is false
		return e => {
			const tracks = this.state.tracks;
			tracks[number][field] = e.currentTarget.value;
			// if we
			tracks[number]['number'] = number + 1;
			tracks[number]['unknown'] = false;

			this.setState( {
					tracks: tracks
			});
		};
	}
	updateTrackUnknown(number) {

		return e => {
			const tracks = this.state.tracks;
			tracks[number]['unknown'] = true;
			tracks[number]['number'] = number + 1;
			tracks[number]['name'] = 'unknown';


			// tracks[number]['name'] = 'unknown';
			this.setState( {
					tracks: tracks
			});
		};
	}



	makeTrackInput(idx) {
		return (

			<div key={idx}>
				<li>

				{idx+1}
					<input type="text"

					value={this.state.tracks[idx]['name']}
					onChange={this.updateTrack(idx, "name")}
					className="track-input"
					placeholder="track name!"/>
					Unkown?


					<input type="button"
					value="Mark as unkown"
					// onClick={this.updateTrackUnknown(idx)}

					/>


				</li>
					<input type="button"
					key={idx}
					value="Add track!"
					// onClick={this.handleTrackSubmit(idx)}
					disabled={this.state.tracks[idx]['submitted']}

					/>

			</div>
		);
	}



	updateTrackCB(trackObj, trackIdx) {

		console.log(`mix form received ${trackObj} from track ${trackIdx}`);
		const tracks = this.state.tracks;
		const track = tracks[trackIdx];

		track.sdObj = _.merge({}, trackObj);
		track.number = trackIdx + 1;
		track.unknown = false;

		this.setState({tracks: tracks});
	}

	updateMixCB(mixObj) {
		console.log(`received mix ${mixObj}, setting state`);
		// change to user.avatar_url if no artwork_url
		let artwork_url = mixObj.artwork_url;

		if(!artwork_url) {
			// console.log('changing artwork_url to user artwork');
			artwork_url = mixObj.user.avatar_url;
		} else {
			// console.log('ok');
		}

		this.setState({mix: mixObj, artwork_url: artwork_url});
	}


	handleMixSubmit(e) {
		e.preventDefault();
		const mix = this.state;

		this.props.submitMix(mix);
		hashHistory.push("/home");
	}

	successfulSubmit() {

	}

	failedSubmit() {

	}
	renderTrackInputs(count) {
		let trackInputs = Array(count).fill(0);

		return (
			trackInputs.map((trackInput, idx) => {
				return(
					<MixInputField
						updateCB={this.updateTrackCB.bind(this)}
						mixType="track" idx={idx} key={idx}/>
				);
			})

		);


	}


	render() {
		return(
			<div className="mix-form-container">

				<div className="mix-form-instructions">
					<div className="instructions-text">
						<p className="line-1"> Select one mix from Soundcloud</p>
						<p className="line-2"> Then enter a tracklist </p>
					</div>
				</div>


				<form onSubmit={this.handleMixSubmit} className="mix-form-box">
					<br/>




					<div className="mix-form">

						<div className="mix-details cf">

								<div className="mix-selection">

									<span className="mix-selection-advice">
										Your mix selection must be longer than 10 minutes.
									</span>

									<div className="soundcloud-pic-container">
										<img
										src={this.state.artwork_url}/>
									</div>


									<MixInputField
										updateCB={this.updateMixCB.bind(this)} mixType="mix"
										idx="-1"/>



								</div>

								<div className="mix-selection-form">
									<textarea className="mix-description"
									cols="25"
									rows="10"
									value={this.state.description}
									onChange={this.update("description")}
									className="mix-description"
									placeholder="Description!"/>

									<input type="text" className="mix-tags"
										placeholder="Tags, separated, by, commas, please"/>

									<input type="submit" value="Create Mix" className="submit-mix-button"/>
								</div>


							</div>

					{/* TRACKS: */}

					<div className="track-details">
						<span className="track-selection-advice">
							<strong>TRACKLIST</strong> - Choose at least 3 tracks.
						</span>

						{this.renderTrackInputs(3) }
					</div>

						<br />



					</div>
				</form>
			</div>
		);
	}
}

export default MixForm;

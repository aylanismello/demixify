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
		let mixSuggestions = [{title: ''}, {title: ''}, {title: ''}];
		this.state = {
			mix_name: "",
			mixSuggestions: mixSuggestions,
			description: "",
			tracks: tracks,
			user_id: props.currentUser.id
		};

		this.handleMixInputUpdate = this.handleMixInputUpdate.bind(this);
		this.handleMixSubmit = this.handleMixSubmit.bind(this);
		this.handleTrackSubmit = this.handleTrackSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.makeTrackInput = this.makeTrackInput.bind(this);

		this.makeSuggestions = this.makeSuggestions.bind(this);
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
			// if we just click unown , our name gets set to null and unkown is false
			// debugger;
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

	handleTrackSubmit(idx) {
		return e => {
			const tracks = this.state.tracks;

			const onReceivedTracks = (theTracks) => {
				const theTrack = theTracks[0];
				tracks[idx] = theTrack;
				this.setState({
					tracks: tracks
				});

			};

			searchByTrack(tracks[idx].name, onReceivedTracks);
		};
	}
	handleMixInputUpdate(){
		return e => {

			const updateSearchFilter = (tracks) => {

				let suggestedTracks = tracks.slice(0, 3);
				// debugger;

				this.setState({mixSuggestions: suggestedTracks, mix_name: e.currentTarget.value});


			}

			searchByTrack(e.currentTarget.value, updateSearchFilter);
		}
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
					onClick={this.updateTrackUnknown(idx)}

					/>


				</li>
					<input type="button"
					key={idx}
					value="Add track!"
					onClick={this.handleTrackSubmit(idx)}
					disabled={this.state.tracks[idx]['submitted']}

					/>

			</div>
		);
	}
	makeSuggestions() {
		return(
			<div>
				<li>{this.state.mixSuggestions[0].title}</li>
				<li>{this.state.mixSuggestions[1].title}</li>
				<li>{this.state.mixSuggestions[2].title}</li>
			</div>
		);
	}

	updateCB(trackObj, trackIdx) {

		// window.trackObj = trackObj;
		// debugger;
		console.log(`mix form received ${trackObj} from track ${trackIdx}`);

		// now update state

		const tracks = this.state.tracks;
		const track = tracks[trackIdx];
		// debugger;

		track.sdObj = _.merge({}, trackObj);
		track.number = trackIdx + 1;
		track.unknown = true;
		// debugger;

		this.setState({tracks: tracks});
	}

	handleMixSubmit(e) {
		e.preventDefault();
		const mix = this.state;

		debugger;

		this.props.submitMix(mix);
	}



	render() {
		return(
			<div className="mix-form-container">

				<form onSubmit={this.handleMixSubmit} className="mix-form-box">
				<br/>

				<div className="mix-form-text">

					OMG MAKE A MIX

				</div>



				<div className="mix-form">

				<MixInputField updateCB={this.updateCB.bind(this)} idx="0"/>
				<MixInputField updateCB={this.updateCB.bind(this)} idx="1"/>
				<MixInputField updateCB={this.updateCB.bind(this)} idx="2"/>




					{/* <input type="text"
					value={this.state.mix_name}
					onChange={this.handleMixInputUpdate()}
					className="mix-input"
					placeholder="Type mix name here to search!"/>


					{this.makeSuggestions()} */}


					{/* <textarea
					cols="25"
					rows="10"
					value={this.state.description}
					onChange={this.update("description")}
					className="mix-description"
					placeholder="Description!"/>


					<br />
					<br />
					<h1>TRACKS</h1>
					<br />
					<br />


					{seedTracks.map((track, idx) => {
						return this.makeTrackInput(idx);
					})}

					<br /> */}


					<input type="submit" value="Create Mix" />
				</div>
				</form>
			</div>
		);
	}
}

export default MixForm;

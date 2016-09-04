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
			user_id: props.currentUser.id
		};

		this.handleMixSubmit = this.handleMixSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.makeTrackInput = this.makeTrackInput.bind(this);

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
		this.setState({mix: mixObj});
	}


	handleMixSubmit(e) {
		e.preventDefault();
		const mix = this.state;


		this.props.submitMix(mix);
		debugger;
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



				MIX:

				<MixInputField updateCB={this.updateMixCB.bind(this)} idx="-1"/>


				TRACKS:
				<MixInputField
					updateCB={this.updateTrackCB.bind(this)} idx="0"/>
				<MixInputField
					updateCB={this.updateTrackCB.bind(this)} idx="1"/>
				<MixInputField
					updateCB={this.updateTrackCB.bind(this)} idx="2"/>




					<textarea
					cols="25"
					rows="10"
					value={this.state.description}
					onChange={this.update("description")}
					className="mix-description"
					placeholder="Description!"/>


					<br />


					<input type="submit" value="Create Mix" />
				</div>
				</form>
			</div>
		);
	}
}

export default MixForm;

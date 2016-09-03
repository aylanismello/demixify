import React from 'react';
import { Link, hashHistory } from 'react-router';
import {seedTracks} from '../../soundcloud_util/seederTracks';


class MixForm extends React.Component {
	constructor(props) {

		super(props);

		let tracks = [{}, {}, {}];

		this.state = {
			mix_name: "",
			description: "",
			tracks: tracks,
			user_id: props.currentUser.id
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.makeTrackInput = this.makeTrackInput.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const mix = this.state;
		debugger;

		this.props.submitMix(mix);
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
					onClick={this.updateTrackUnknown(idx)}

					/>


				</li>
			</div>
		);
	}

	render() {
		return(
			<div className="mix-form-container">
				<form onSubmit={this.handleSubmit} className="mix-form-box">
				<br/>

				<div className="mix-form-text">

					OMG MAKE A MIX

				</div>

				<div className="mix-form">
					<input type="text"
					value={this.state.mix_name}
					onChange={this.update("mix_name")}
					className="mix-input"
					placeholder="Type mix name here to search!"/>


					<textarea
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

					<br />


					<input type="submit" value="Submit" />



				</div>

				</form>
			</div>
		);
	}
}

export default MixForm;

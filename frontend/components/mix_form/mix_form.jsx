import React from 'react';
import { Link, hashHistory } from 'react-router';
import {seedTracks} from '../../soundcloud_util/seederTracks';


class MixForm extends React.Component {
	constructor(props) {

		super(props);


		debugger;

		this.state = {
			mix_name: "",
			description: "",
			tracks: [],
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


// 	this.setState({
//   items: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
// })

	// items: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
	updateTrack(number) {

		const tracks = this.state.tracks;

		return e => {
			tracks[number] = e.currentTarget.value;

			this.setState( {
					tracks: tracks
			});
		};
	}


	makeTrackInput(idx) {
		return (

			<li key={idx}>
			{idx+1}
				<input type="text"
				key = {idx}
				value={this.state.track_name}
				onChange={this.updateTrack(idx)}
				className="track-input"
				placeholder="track name!"/>
			</li>
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

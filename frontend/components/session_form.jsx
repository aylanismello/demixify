import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}



	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {

		if (this.props.loggedIn) {
			hashHistory.push("/home");
		}
	}

	update(field) {
		return e => {
			this.setState({[field]: e.currentTarget.value});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === 'login') {
			return <Link to="/signup"> sign up instead </Link>;
		} else {
			return <Link to="/login"> log in instead </Link>;
		}
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

	render() {
		return (
			<ul className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
						<br/>

						<div className="login-form-status">
							{/* Please { this.props.formType } or { this.navLink() } */}

							{ this.renderErrors() }
						</div>


						<div className="welcome-text">
							<h2 className="login-form-header">Get to know your mixes</h2>
							<h3>Join the worldwide community and break down your music with Demixify</h3>
						</div>

						{this.props.formType}!


						<div className="login-form">
							<br />
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input"
									placeholder="email"
									/>

							<br />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder="Password"
									/>

							<br />
							<input type="submit" value="Submit" />
						</div>
				</form>
			</ul>
		);
	}

}

export default SessionForm;

import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};

		this.runDemo = this.runDemo.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.animate = this.animate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}



	componentDidUpdate() {
		this.redirectIfLoggedIn();

	}

	componentDidMount() {
		if (this.props.formType === 'demo')
			this.runDemo();
	}

	redirectIfLoggedIn() {

		if (this.props.loggedIn)
			hashHistory.push("/home");

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



	runDemo() {
		this.handleDemo();
	}

	handleDemo() {
		this.setState({ email: "", password: "" });

		this.email = "demo_user@gmail.com".split("");
		this.password = "password".split("");
		this.currentUsername = "";
		this.currentPass = "";

		this.interval = window.setInterval(this.animate, 50);
	}

	animate() {
			if (this.email.length > 0){
				this.currentUsername += this.email.shift();
				this.setState({ email: this.currentUsername });

		} else if (this.password.length > 0) {
				this.currentPass = this.currentPass + this.password.shift();
				this.setState({ password: this.currentPass });

		} else {
			let user = this.state;
			this.props.processForm({ user });
			window.clearInterval(this.interval);
		}
	}



	render() {

		return (
			<div className="login-form-container">


				<form onSubmit={this.handleSubmit} className="login-form-box">
						<div className="x-modal">
						<img src="http://res.cloudinary.com/dfkrjl3pb/image/upload/v1474011907/x_hxdxmy.png"
						onClick={this.props.closeModal}/>
						</div>
						<br/>

						<div className="login-form-status">
							{/* Please { this.props.formType } or { this.navLink() } */}

							{ this.renderErrors() }
						</div>


						<div className="welcome-text">
							<h2 className="login-form-header">Get to know your mixes</h2>
							<h3>Join the worldwide community and break down your music with Demixify</h3>
						</div>

						{/* {this.props.formType}! */}


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


						<br/>

							<input className="session-form-button"
								type="submit" value={this.props.formType} />
						</div>
				</form>
			</div>
		);
	}

}

export default SessionForm;

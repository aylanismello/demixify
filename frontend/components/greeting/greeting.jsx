import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import Splash from '../splash/splash';
import SessionFormContainer from '../session_form/session_form_container';



class Greeting extends React.Component {
	constructor(props) {
		// debugger

		super(props);
		this.sessionLinks = this.sessionLinks.bind(this);


		this.openSignupModal = this.props.modalFunctions.openSignupModal.bind(this);
		this.openLoginModal = this.props.modalFunctions.openLoginModal.bind(this);
		this.openDemoModal = this.props.modalFunctions.openDemoModal.bind(this);
		this.closeModal = this.props.modalFunctions.closeModal.bind(this);

		this.getModalState = this.props.modalFunctions.getModalState.bind(this);
		this.personalGreeting = this.personalGreeting.bind(this);
	}


	sessionLinks() {
		return (
			<nav className="login-signup cf">
				<a className="login" onClick={this.openLoginModal}>Login</a>
				<a className="signup" onClick={this.openSignupModal}>Sign Up</a>

			</nav>
		);

	}

	goTo(url) {
		hashHistory.push('/home/create_demix');
	}

	personalGreeting(currentUser, logout) {

		return (
			<nav className="profile-dropdown-wrapper">
				<div className="header-profile-pic">

					<img src={currentUser.img_url}
						alt="{currentUser.username}"/>

				</div>

				<div className="my-dropdown">
					<li onClick={this.goTo.bind(this)}>Create Demix</li>
					<li onClick={logout}>Log Out</li>

				</div>

			</nav>
		);

	}


	render() {
			if (this.props.currentUser.id) {
				return this.personalGreeting(this.props.currentUser, this.props.logout);
			} else {
				return (
					 this.sessionLinks()
				);
			}
	}
}




export default Greeting;

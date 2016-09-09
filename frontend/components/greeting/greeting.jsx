import React from 'react';
import { Link } from 'react-router';
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

	personalGreeting(currentUser, logout) {

		return (
			<nav className="profile-dropdown-wrapper">

				<div className="header-profile-pic">

					<img src={currentUser.img_url} alt="{currentUser.username}"/>
				</div>

				<div className="my-dropdown">
					{/* <li> <Link to="/profile" >Profile</Link></li> */}
					<li> <Link to="/home/create_demix" >Create Demix</Link></li>
					<li> <a className="logout" onClick={logout}>Log Out</a> </li>

				</div>

			</nav>
		);

	}


	render() {
			// debugger;

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

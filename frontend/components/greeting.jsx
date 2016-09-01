import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import Splash from './splash';
import SessionFormContainer from './session_form_container';



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
		// debugger;

		return (
			<nav className="login-signup cf">
			<button className="login btn btn-default" onClick={this.openLoginModal}>Login</button>
			<button className="signup button btn-default" onClick={this.openSignupModal}>Sign Up</button>

			</nav>
		);

	}

	personalGreeting(currentUser, logout) {



		return (
		<nav className="profile-dropdown-wrapper">
			<img className="header-profile-pic" src={currentUser.img_url} alt="{currentUser.username}"/>

			<div className="my-dropdown">
				<li> <Link to="/profile" >Profile</Link></li>
				<li> <Link to="/create_demix" >Create DeMix</Link></li>
				<li> <a className="logout" onClick={logout}>Log Out</a> </li>

			</div>

		</nav>
		);

	}

	// componentWillMount() {
	// 	if (this.props.currentUser) {
	// 		console.log('YO CLOSE IT');
	// 		this.closeModal();
	// 	}
	// }

	// componentDidUpdate() {
	// 	if (this.props.currentUser) {
	// 		this.closeModal();
	// 	}
	// }

	render() {
			// debugger;

			if (this.props.currentUser) {
				// alert('make modal go away!');
				// this.closeModal();
				return this.personalGreeting(this.props.currentUser, this.props.logout);

			} else {
				return (
					 this.sessionLinks()
					//  <Splash/>
				);
			}
	}
}




export default Greeting;

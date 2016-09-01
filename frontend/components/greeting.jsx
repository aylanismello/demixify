import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import Splash from './splash';
import SessionFormContainer from './session_form_container';



class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.sessionLinks = this.sessionLinks.bind(this);
		this.openSignupModal = this.openSignupModal.bind(this);
		this.openLoginModal = this.openLoginModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.personalGreeting = this.personalGreeting.bind(this);

		this.state = {
			modal: false,
			typeOfForm: "signup"
		};
	}

	closeModal() {
		this.setState({modal: false});
		$('.splash').css('z-index', 1);

	}

	openSignupModal() {
		$('.splash').css('z-index', -2);
		this.setState({modal: true, typeOfForm: "signup"});
	}
	openLoginModal() {
		$('.splash').css('z-index', -2);
		this.setState({modal: true, typeOfForm: "login"});
	}

	sessionLinks() {

		return (
			<nav className="login-signup cf">
			<button className="login btn btn-default" onClick={this.openLoginModal}>Login</button>
			<button className="signup button btn-default" onClick={this.openSignupModal}>Sign Up</button>

			<Modal isOpen={this.state.modal} onRequestClose={this.closeModal}>
				<SessionFormContainer typeOfForm={this.state.typeOfForm} />
			</Modal>

				{/* <Link to="/login" activeClassName="current">Login</Link> */}
				{/* <br/> */}
				{/* <Link to="/signup" activeClassName="current">Sign up!</Link> */}
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

	render() {
			if (this.props.currentUser) {
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

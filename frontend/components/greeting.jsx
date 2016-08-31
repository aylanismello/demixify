import React from 'react';
import { Link } from 'react-router';


const sessionLinks = () => {

	return (
		<nav className="login-signup cf">
			<Link to="/login" activeClassName="current">Login</Link>
			<br/>
			<Link to="/signup" activeClassName="current">Sign up!</Link>
		</nav>
	);
};

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">

		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<a className="logout" onClick={logout}>Log Out</a>
	</hgroup>
);

const Greeting = ({currentUser, logout}) => {

	if (currentUser) {
		return personalGreeting(currentUser, logout);
	} else {
		return sessionLinks();
	}

};

export default Greeting;
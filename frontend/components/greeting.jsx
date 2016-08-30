import React from 'react';
import { Link } from 'react-router';


const sessionLinks = () => {

	// debugger;

	return (
		<nav className="login-signup">
			<Link to="/login" activeClassName="current">Login</Link>
			<br/>
			<Link to="/signup" activeClassName="current">Sign up!</Link>
		</nav>
	);
};

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({currentUser, logout}) => {
	// debugger;

	if (currentUser) {
		return personalGreeting(currentUser, logout);
	} else {
		return sessionLinks();
	}

	// return (
	// 	<div>
	// 		what happened?
	// 	</div>
	// );
};

export default Greeting;

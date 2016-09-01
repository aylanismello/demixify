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
	<nav className="profile-dropdown-wrapper">
		<img className="header-profile-pic" src={currentUser.img_url} alt="{currentUser.username}"/>

		<div className="my-dropdown">
			<li> <Link to="/profile" >Profile</Link></li>
			<li> <Link to="/create_demix" >Create DeMix</Link></li>
			<li> <a className="logout" onClick={logout}>Log Out</a> </li>

		</div>

	</nav>
);

const Greeting = ({currentUser, logout}) => {

	if (currentUser) {
		return personalGreeting(currentUser, logout);
	} else {
		return sessionLinks();
	}

};

export default Greeting;

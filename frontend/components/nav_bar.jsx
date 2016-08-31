import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const NavBar = ({children}) => (
	<div>
		<header className="nav-bar">
			<Link to="/" className="header-link cf"><h1>Demixify</h1></Link>
			<GreetingContainer/>
		</header>
		{children}
	</div>
);

export default NavBar;

import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const NavBar = ({children}) => (
	<div>
		<header className="nav-bar">

			<span className="header-left">
				<Link to="/" className="header-link cf"><h1>Demixify</h1></Link>

					{/* <div className="search-bar-wrapper"> */}
						<input className="search-bar" autocomplete="off"
							placeholder="What sort of mix are you feeling?" type="text"/>
						<Link to="/explore" className="search-button">Explore</Link>
					{/* </div> */}
				</span>

				<GreetingContainer/>
		</header>
		{children}
	</div>
);

export default NavBar;

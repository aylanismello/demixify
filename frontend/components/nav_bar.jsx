import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';




const NavBar = ({children, modalFunctions}) => {

	return(

			<div>
				<header className="my-nav-bar">

					<span className="header-left">
						<Link to="/" className="header-link cf"><h1>Demixify</h1></Link>

							{/* <div className="search-bar-wrapper"> */}
								<input className="my-search-bar"
									placeholder="What sort of mix are you feeling?" type="text"/>
								<Link to="/explore" className="search-button">Explore</Link>
							{/* </div> */}
						</span>

						<GreetingContainer modalFunctions={modalFunctions}/>
				</header>
				{children}
			</div>
		);
};

export default NavBar;

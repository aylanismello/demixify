import React from 'react';
import { Link } from 'react-router';
import MixIndex from '../mix_index/mix_index';

const Home = () => (
	<div className="home-screen">
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
					<Link to="/home" className="navbar-brand">HOME</Link>
					<Link to="/liked" className="navbar-brand">LIKED</Link>
					<Link to="/djs" className="navbar-brand">DJS</Link>
					<Link to="/create_mix" className="navbar-brand">MAKE DEMIX</Link>
		    </div>
		  </div>
		</nav>

		<MixIndex/>


	</div>
);

export default Home;

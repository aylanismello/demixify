import React from 'react';
import { Link } from 'react-router';
import MixIndex from '../mix_index/mix_index';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="home-screen">
					<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
								<Link to="/home" className="navbar-brand">HOME
									</Link>

								<Link to="/liked" className="navbar-brand">LIKED
									</Link>

								<Link to="/djs" className="navbar-brand">DJS
									</Link>

								<Link to="/my_demixes" className="navbar-brand">
									MY DEMIXES
								</Link>
					    </div>
					  </div>
					</nav>

					{/* <MixIndex/> */}


				</div>
		);
	}
}

export default Home;

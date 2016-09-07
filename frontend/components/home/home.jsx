import React from 'react';
import { Link } from 'react-router';
import MixIndexContainer from '../mix_index/mix_index_container';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		// this.props.getMixes("");
	}

	render() {
		return (
				<div className="home-screen">
					<nav className="navbar home-navbar denix-home">
					  <div className="container-fluid">
					    <div className="navbar-header">
								<Link to="/home" className="navbar-brand">
									HOME
								</Link>

								<Link to="/home/liked" className="navbar-brand">
									LIKED
								</Link>


								<Link to="/home/my_demixes" className="navbar-brand">
									MY DEMIXES
								</Link>

								<Link to="/home/create_demix" className="navbar-brand">
									+
								</Link>

					    </div>
					  </div>
					</nav>


					{this.props.children}

				</div>
		);
	}
}

export default Home;

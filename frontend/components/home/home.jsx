import React from 'react';
import { Link } from 'react-router';
import MixIndexContainer from '../mix_index/mix_index_container';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.setFilterToLike = this.setFilterToLike.bind(this);
		this.setFilterToMine = this.setFilterToMine.bind(this);
	}

	componentDidMount(){
		// this.props.getMixes("");
	}


	// these both just invoke setFilter with diff values
	setFilterToLike() {
		this.props.setFilter("my", "likes");
	}

	setFilterToMine() {
		this.props.setFilter("my", "mixes");
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


								<Link to="/home" className="navbar-brand" onClick={this.setFilterToLike}>
									LIKED
								</Link>


								<Link to="/home" className="navbar-brand" onClick={this.setFilterToMine}>
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

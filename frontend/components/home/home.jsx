import React from 'react';
import { Link } from 'react-router';
import MixIndexContainer from '../mix_index/mix_index_container';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.setFilterToLike = this.setFilterToLike.bind(this);
		this.setFilterToUser = this.setFilterToUser.bind(this);
		this.setFilterToNone = this.setFilterToNone.bind(this);
	}

	componentDidMount(){
		this.props.getMixes();
	}


	// these both just invoke setFilter with diff values
	setFilterToLike() {
		this.props.setFilter("likes");
	}

	setFilterToUser() {
		this.props.setFilter("user");
	}

	setFilterToNone() {
		this.props.setFilter("", "");
	}



	render() {
		return (
			<div>
				<div className="home-screen">
					<nav className="navbar home-navbar demix-home">
					  <div className="container-fluid">
					    <div className="navbar-header">
								<Link to="/home" className="navbar-brand" onClick={this.setFilterToNone}>
									HOME
								</Link>


								<Link to="/home" className="navbar-brand" onClick={this.setFilterToLike}>
									LIKED
								</Link>


								<Link to="/home" className="navbar-brand" onClick={this.setFilterToUser}>
									MY DEMIXES
								</Link>

								<Link to="/home/create_demix" className="navbar-brand" >
									+
								</Link>

					    </div>
					  </div>
					</nav>



				</div>
				{this.props.children}
				</div>
		);
	}
}

export default Home;

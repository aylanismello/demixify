import React from 'react';
import { Link } from 'react-router';
import MixIndexContainer from '../mix_index/mix_index_container';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.setFilterToNone = this.setFilterToNone.bind(this);
	}

	componentDidMount(){
		this.props.getMixes();
		this.setFilterToNone();
	}

	// these both just invoke setFilter with diff values

	setFilterToNone() {
		this.props.setFilter("", "");
	}


	setFilterTo(type) {
		console.log(type);
		this.props.setFilter(type);
	}


	render() {
		return (
			<div>
				<div className="home-screen">
					<nav className="navbar home-navbar demix-home">
					  <div className="container-fluid">
					    <div className="navbar-header">


								<li className="nav-item"
									onClick={this.setFilterToNone}>
									<Link to="/home" className="nav-item" >
										<p>HOME</p>
									</Link>
								</li>


								<li className="nav-item"
									onClick={this.setFilterTo.bind(this, "likes")}>
								<Link to="/home" className="nav-item" >
									<p>LIKED</p>
								</Link>
								</li>


								<li className="nav-item"
									onClick={this.setFilterTo.bind(this, "user")}>
								<Link to="/home" className="nav-item" >
									MY DEMIXES
								</Link>
								</li>

								<li className="nav-item">
								<Link to="/home/create_demix" className="nav-item" >
									+
								</Link>
								</li>

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

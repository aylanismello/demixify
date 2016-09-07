import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.updateSearchString = this.updateSearchString.bind(this);


		this.state = {
			searchString: ""
		};
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		console.log(this.state.searchString);
		this.props.getMixes(this.state.searchString);
		hashHistory.push('/explore');
		// debugger;

	}

	updateSearchString() {
		return e => {
			this.setState({searchString: e.currentTarget.value});
		};
	}




	render() {

		// debugger;
		let homeLink  = this.props.currentUser ? "/home" : "/";

		return(
				<div>
					<header className="my-nav-bar cf">

						<div className="header-left cf">
							<Link to={homeLink} className="logo">
									<img src="http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473204560/Screen_Shot_2016-09-06_at_4.28.26_PM_dbangc.png"/>
							</Link>


							<form onSubmit={this.handleSearchSubmit} className="mix-search-form cf">
								<input className="my-search-bar"
									placeholder="What sort of mix are you feeling?"
									value={this.state.searchString}
									onChange={this.updateSearchString()}
									type="text"/>

								<input type="submit" value="Explore" className="search-button"/>
							</form>
						</div>

							<GreetingContainer
							modalFunctions={this.props.modalFunctions}/>
					</header>
					{this.props.children}
				</div>
			);

	}
}

export default NavBar;

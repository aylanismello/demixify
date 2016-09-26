import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';


const PLACEHOLDER = "What sort of mix are you feeling?";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.updateSearchString = this.updateSearchString.bind(this);
		this.matchingMixes = this.matchingMixes.bind(this);
		this.handleShowRedirect = this.handleShowRedirect.bind(this);

		this.state = {
			searchString: "",
			placeholder: PLACEHOLDER
		};
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		this.props.setFilter("string", this.state.searchString);
		hashHistory.push("/explore");
	}

	updateSearchString() {
		return e => {
			this.setState({searchString: e.currentTarget.value});
			this.props.setFilter("string", e.currentTarget.value);
		};
	}

	handleShowRedirect() {
		const args = arguments;
		return e => {
			const mixId = args[0];

			// now we do not update the mix, we set the currentTrack to the one clicked on
			// also close menu

			this.setState({searchString: "", placeholder: PLACEHOLDER});
			this.props.setFilter("string", "asdfghjkl");


			this.props.setPlayerState(true);

			this.props.setCurrentMixId(mixId);
			hashHistory.push(`/mixes/${mixId}`);
		};

	}

	matchingMixes() {
		let mixKeys = Object.keys(this.props.mix.mixes);
		let mixes = this.props.mix.mixes;

		let filterType = this.props.filter.type;
		let filterVal = (this.props.filter.val || "").toLowerCase();

		let gibberish = 'asdfghjkl';
		// OMG SUCH A HACK.
		if (filterVal === "")
			filterVal = gibberish;

		// console.log(`filter val is ${filterVal}`);

		mixKeys = mixKeys.filter( mixKey => {

			return mixes[mixKey].mix.title.toLowerCase().includes(filterVal);

		});

		console.log(mixKeys);


		let el = 	mixKeys.splice(0, 2).map((mixId, idx) => {
				let mix = this.props.mix.mixes[mixId];
				let title = mix.mix.title;
					console.log(title);

					return (
					<div key={idx} className="explore-suggestion-item-container"
						onClick={this.handleShowRedirect(mixId)}>

						<div className="explore-suggestion-item-artwork">
							<img src={mix.mix.artwork_url}/>
						</div>

						<p className="explore-suggestion-item-text">{title}</p>
					</div>
					);

				}
		);

		return el;


	}

	onFocus() {
		this.setState({placeholder: ""});
	}

	onBlur() {
		// console.log('blurred!');
		// return e => {
		// 	this.setState({placeholder: PLACEHOLDER, searchString: ""});
		// 	this.props.setFilter("string", "");
		//
		// };

	}



	render() {
		let homeLink  = this.props.currentUser.id ? "/home" : "/";

		let searchMixes = this.matchingMixes();
		// let

		return(
				<div>

					<div className="my-nav-bar-container">
					<div className="my-nav-bar cf">

						<div className="header-left cf">
							<Link to={homeLink} className="logo">
									<img src="http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473441056/demixify_logo_njitun.png"/>
							</Link>


							<form onSubmit={this.handleSearchSubmit}
								className="mix-search-form cf">
								<input className="my-search-bar"
									placeholder={this.state.placeholder}
									value={this.state.searchString}
									onChange={this.updateSearchString()}
									onFocus={this.onFocus.bind(this)}
									onBlur={this.onBlur.bind(this)}

									type="text"/>

								<input type="submit"
									value="Explore"
									className="search-button"/>


								<ul className="explore-suggestions">
									{searchMixes}
								</ul>


							</form>
						</div>

							<GreetingContainer
							modalFunctions={this.props.modalFunctions}/>
					</div>

					</div>
					{this.props.children}
				</div>
			);

	}
}

export default NavBar;

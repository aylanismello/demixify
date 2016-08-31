import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import NavBar from './nav_bar';
import SessionFormContainer from './session_form_container';
import Splash from './splash';
import Home from './home';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
		this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
	}


	_redirectIfLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
		if (currentUser) replace('/');
	}

	render() {
		return(
			<Router history={ hashHistory }>
				<Route path="/" component= { NavBar }>
					<IndexRoute component= { Splash } />

					<Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
					<Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
					<Route path="/home" component={ Home }/>

				</Route>

			</Router>
		);
	}
}

export default AppRouter;

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import NavBar from '../nav_bar/nav_bar';
import SessionFormContainer from '../session_form/session_form_container';
import Splash from '../splash/splash';
import Home from '../home/home';
import ParentComponent from '../parent_component/parent_component';
import MixFormContainer from '../mix_form/mix_form_container';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
		this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
		this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
	}

	_redirectIfLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
		if (currentUser) replace('/');
	}

	_ensureLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
		if(!currentUser) {
			replace('/');
		}
	}




	render() {
		return(
			<Router history={ hashHistory }>
				<Route path="/" component= { ParentComponent }>
					<Route path="/home" component={ Home } onEnter={ this._ensureLoggedIn }/>
					<Router path="/create_mix" component={ MixFormContainer } onEnter={ this._ensureLoggedIn } />

				</Route>

			</Router>
		);
	}
}

export default AppRouter;

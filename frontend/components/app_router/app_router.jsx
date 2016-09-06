import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import NavBar from '../nav_bar/nav_bar';
import SessionFormContainer from '../session_form/session_form_container';
import Splash from '../splash/splash';
import Explore from '../explore/explore';
import HomeContainer from '../home/home_container';
import ParentComponent from '../parent_component/parent_component';
import MixFormContainer from '../mix_form/mix_form_container';
import MyDemixes from '../my_demixes/my_demixes';

import MixShowContainer from '../mix_show/mix_show_container';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
		this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
		this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
	}

	_redirectIfLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
		// debugger;
		// if (currentUser) replace('/home');
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
				<Route path="/" component= { ParentComponent } onEnter={ this._redirectIfLoggedIn }>

					<Route path="/home" component={ HomeContainer }
						onEnter={ this._ensureLoggedIn }/>
					<Route path="/explore" component={ Explore }/>
					<Route path="/my_demixes" component ={ MyDemixes }
						onEnter = {this._ensureLoggedIn} />

					<Route path="/create_demix" component={ MixFormContainer }
						onEnter={ this._ensureLoggedIn } />

				  <Route path="/mixes/:mixId" component={ MixShowContainer } />

				</Route>

			</Router>
		);
	}
}

export default AppRouter;

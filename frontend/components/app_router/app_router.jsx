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





import MixIndexContainer from '../mix_index/mix_index_container';

import MixShowContainer from '../mix_show/mix_show_container';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
		this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
		this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
		this._getMixes = this._getMixes.bind(this);
	}

	_redirectIfLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
	}

	_getMixes(nextState, replace) {
		this.props.getMixes();
	}

	_ensureLoggedIn(nextState, replace) {
		const currentUser = this.props.currentUser;
		// debugger;
		// this.props.currentUser.id
		// if current user is false
		if(!currentUser.id) {
			replace('/');
		}
	}






	render() {
		return(
			<Router history={ hashHistory }>
			{/*  put fetch mixes in on enter hook*/}
				<Route path="/" component= { ParentComponent }
					onEnter={ this._getMixes }>


					<Route path="/home" component={ HomeContainer }
						onEnter={ this._ensureLoggedIn }>

						<IndexRoute component={ MixIndexContainer }/>

						<Route path="create_demix"
							component={ MixFormContainer }
							onEnter={ this._ensureLoggedIn } />


						<Route path="my_demixes" component ={ MyDemixes }
						onEnter = {this._ensureLoggedIn} />



					</Route>


					<Route path="/explore" component={ Explore }>
							<IndexRoute component={ MixIndexContainer }/>
					</Route>


				  <Route path="/mixes/:mixId" component={ MixShowContainer } />

				</Route>

			</Router>
		);
	}
}

export default AppRouter;

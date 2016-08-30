import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form_container';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Router history={ hashHistory }>
				<Route path="/" component= { App }>
					<Route path="/login" component = { SessionFormContainer } />
					<Route path="/signup" component= { SessionFormContainer } />
				</Route>
			</Router>
		);
	}
}

export default AppRouter;

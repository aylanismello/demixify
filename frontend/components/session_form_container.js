import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../actions/session_actions';


const mapStateToProps = state => {

	return {
		loggedIn: Boolean(state.session.currentUser),
		errors: state.session.errors
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.location.pathname.slice(1); // get rid of /
	let formFunction;

	if (formType === 'login') {
		formFunction = login; //set formType to the login function
	} else if (formType === 'signup') {
		formFunction = signup; // set formType to the signup function
	}

	return {
		processForm: user => dispatch(formFunction(user)),
		formType
	};

};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);

import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = state => {

	return {
		loggedIn: Boolean(state.session.currentUser.id),
		errors: state.session.errors
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	// debugger;
	// const formType = ownProps.location.pathname.slice(1); // get rid of /
	const formType = ownProps.formType;
	// const modal = ownProps.modalFunctions;
	// debugger;
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

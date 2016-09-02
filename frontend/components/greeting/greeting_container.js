import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		currentUser: state.session.currentUser,
		modalFunctions: ownProps.modalFunctions
	};
};

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Greeting);

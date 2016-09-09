import { connect } from 'react-redux';
import ParentComponent from './parent_component';

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		currentUser: state.session.currentUser,
		currentUserId: state.session.currentUser.id
	};
};


export default connect(
	mapStateToProps
)(ParentComponent);

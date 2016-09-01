import { connect } from 'react-redux';
import ParentComponent from './parent_component';

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		currentUser: state.session.currentUser
	};
};


export default connect(
	mapStateToProps
)(ParentComponent);

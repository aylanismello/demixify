import { connect } from 'react-redux';
import Home from './home';
import { getMixes } from '../../actions/mix_actions';


const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		currentUser: state.session.currentUser,
	};
};

const mapDispatchToProps = dispatch => ({
	getMixes: searchString => dispatch(getMixes(searchString))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

import { connect } from 'react-redux';
import Home from './home';
import { getMixes } from '../../actions/mix_actions';
import { setFilter } from '../../actions/filter_actions';



const mapStateToProps = (state, ownProps) => ({
	// debugger;
		currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	getMixes: searchString => dispatch(getMixes(searchString)),
	setFilter: (filterType, val) => dispatch(setFilter(filterType, val))

});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

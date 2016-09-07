import { connect } from 'react-redux';
import AppRouter from './app_router';
import { getMixes } from '../../actions/mix_actions';


const mapStateToProps = state => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	getMixes: searchString => dispatch(getMixes(searchString))
});

const AppRouterContainer =  connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRouter);

export default AppRouterContainer;

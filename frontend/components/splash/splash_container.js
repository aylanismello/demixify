import { connect } from 'react-redux';
import Splash from './splash';
// import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';
import { getMixes } from '../../actions/mix_actions';


const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mix: state.session.mix,
	openSignupModal: ownProps.openSignupModal,
	openDemoModal: ownProps.openDemoModal
});

const mapDispatchToProps = dispatch => ({
	getMixes: searchString => dispatch(getMixes(searchString))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Splash);

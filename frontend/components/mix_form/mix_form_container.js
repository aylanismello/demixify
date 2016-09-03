import { connect } from 'react-redux';
import MixForm from './mix_form';
// import { login, logout, signup } from '../../actions/session_actions';
import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';



const mapStateToProps = state =>({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	submitMix: mix => dispatch(submitMix(mix)),
	submitTrack: track => dispatch(submitTrack(track))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MixForm);

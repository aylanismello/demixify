import { connect } from 'react-redux';
import MixIndex from './mix_index';
// import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';
import { getMix } from '../../actions/mix_actions';


const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mix: state.mix
});

const mapDispatchToProps = dispatch => ({
	getMix: mixId => dispatch(getMix(mixId))
});



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MixIndex);

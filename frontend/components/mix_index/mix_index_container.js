import { connect } from 'react-redux';
import MixIndex from './mix_index';
// import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';
import { getMixes } from '../../actions/mix_actions';


const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mix: state.mix
});



export default connect(
	mapStateToProps
)(MixIndex);

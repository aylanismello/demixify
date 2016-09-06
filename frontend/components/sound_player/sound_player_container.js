import { connect } from 'react-redux';
import SoundPlayer from './sound_player';
// import { submitMix, submitTrack, MixConstants } from '../../actions/mix_actions';
// import { getMixes } from '../../actions/mix_actions';


const mapStateToProps = state =>({
	currentUser: state.session.currentUser,
	currentMix: state.mix.currentMix
});


export default connect(
	mapStateToProps
)(SoundPlayer);

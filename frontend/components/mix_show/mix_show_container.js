import { connect } from 'react-redux';
import MixShow from './mix_show';
// Actions
import { requestMix } from '../../actions/mix_actions';


const mapStateToProps = (state, ownProps) => ({
  mixId: parseInt(ownProps.params.mixId),
  currentMix: state.mix.currentMix
});


export default connect(
  mapStateToProps
)(MixShow);

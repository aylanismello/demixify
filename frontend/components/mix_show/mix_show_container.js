import { connect } from 'react-redux';
import MixShow from './mix_show';
// Actions
import { requestMix } from '../../actions/mix_actions';
import { submitComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  mixId: parseInt(ownProps.params.mixId),
  currentMix: state.mix.currentMix
});

const mapDispatchToProps = dispatch => ({
  submitComment: (comment, mixId) => dispatch(submitComment(comment, mixId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MixShow);

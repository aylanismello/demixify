import { connect } from 'react-redux';
import MixShow from './mix_show';
// Actions
import { submitComment, getComments } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  mixId: parseInt(ownProps.params.mixId),
  currentMix: state.mix.currentMix
});

const mapDispatchToProps = dispatch => ({
  submitComment: (comment, mixId) => dispatch(submitComment(comment, mixId)),
  getComments: mixId => dispatch(getComments(mixId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MixShow);

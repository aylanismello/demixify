import { connect } from 'react-redux';
import MixShow from './mix_show';
// Actions
import { submitComment, getComments } from '../../actions/comment_actions';
import { getMix } from '../../actions/mix_actions';

const mapStateToProps = (state, ownProps) => ({
  currentMix: state.mix.mixes[ownProps.params.mixId],
  trackCount: state.mix.mixes[ownProps.params.mixId].tracks.length,
  currentTracks: state.mix.mixes[ownProps.params.mixId].tracks,
  likeCount: state.mix.mixes[ownProps.params.mixId].mix.liked_users.length
});

const mapDispatchToProps = dispatch => ({
  submitComment: (comment, mixId) => dispatch(submitComment(comment, mixId)),
  getComments: mixId => dispatch(getComments(mixId)),
  getMix: mixId => dispatch(getMix(mixId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MixShow);

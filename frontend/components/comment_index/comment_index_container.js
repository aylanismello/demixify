import { connect } from 'react-redux';
import { getComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';


const mapStateToProps = (state, ownProps) =>({
	comments: state.mix.mixes[ownProps.mixId].comments.reverse()
});

const mapDispatchToProps = dispatch => ({
	getComments: mixId => dispatch(getComments(mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentIndex);

import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { submitComment } from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mixId: ownProps.mixId
});

const mapDispatchToProps = dispatch => ({
	submitComment: (comment, mixId) => dispatch(submitComment(comment, mixId))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentForm);

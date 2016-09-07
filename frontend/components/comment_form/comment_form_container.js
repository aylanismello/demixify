import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { submitComment } from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) =>({
	currentUser: state.session.currentUser,
	mixId: ownProps.mixId
});

const mapDispatchToProps = dispatch => ({
	submitComment: comment => dispatch(submitComment(comment))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentForm);

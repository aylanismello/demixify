import { connect } from 'react-redux';
import CommentForm from './comment_form';
// import { submitComment } from '../../actions/comment_actions';



const mapStateToProps = state =>({
	currentUser: state.session.currentUser,
	currentMix: state.mix.currentMix
});

// const mapDispatchToProps = dispatch => ({
	// submitComment: comment => dispatch(submitComment(comment))
// });


export default connect(
	mapStateToProps
)(CommentForm);

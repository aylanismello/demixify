import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

		// debugger;
		this.updateComment = this.updateComment.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

		this.state = {
			comment: ""
		};
	}


	updateComment(){
		return e => {
			this.setState({comment: e.currentTarget.value});
		};
	}

	handleCommentSubmit(e) {
		e.preventDefault();
		this.props.submitComment(this.state.comment, parseInt(this.props.mixId));


	}

	


	render() {
		return(
			<div className="comment-form-container">

				<form onSubmit={this.handleCommentSubmit}
					className="comment-form-box">

					<textarea className="comment-text"
					cols="25"
					rows="10"
					value={this.state.comment}
					onChange={this.updateComment()}
					placeholder="What do you think of this demix?"/>

					<input className="submit-comment-button" type="submit" value="submit"/>

				</form>
			</div>
		);
	}
}

export default CommentForm;

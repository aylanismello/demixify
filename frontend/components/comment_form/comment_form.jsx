import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.renderForm = this.renderForm.bind(this);
		this.renderComments = this.renderComments.bind(this);
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

	handleCommentSubmit() {

	}

	renderForm() {
		return (
			<div className="comment-form-container">

				<form onSubmit={this.handleCommentSubmit}
					className="comment-form-box">

					<textarea className="comment-text"
					cols="25"
					rows="10"
					value={this.state.comment}
					onChange={this.updateComment()}
					placeholder="What do you think of this demix?"/>

				</form>
			</div>
		);
	}

	renderComments() {
		return (
			<div>
			</div>
		);
	}


	render() {
		let renderedForm = this.renderForm();
		let renderedComments = this.renderComments();
		// debugger;
		return(
			// <div className="comments-container">
				{renderedForm}
				// {renderedComments}
			// </div>
		);
	}
}

export default CommentForm;

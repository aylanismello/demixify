import React from 'react';


class CommentIndexItem extends React.Component {

	constructor(props) {
		super(props);
		this.comment = this.props.comment;
	}

	render() {
		return (
			<div className="comment-index-item">
				<div className="comment-item-creator">

					<div className="comment-item-creator-pic">
						<img src={this.comment.user_img}/>
					</div>

					<div className="comment-item-creator-text">
						 {this.comment.username}
					</div>

				</div>

				<div className="comment-data">
					<p> {this.comment.body} </p>
					<h3> on {this.comment.created_at} </h3>
				</div>

			</div>
		);
	}
}


export default CommentIndexItem;

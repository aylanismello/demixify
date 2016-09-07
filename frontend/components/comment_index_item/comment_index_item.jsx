import React from 'react';
import dateFormat from 'dateformat';


class CommentIndexItem extends React.Component {

	constructor(props) {
		super(props);
		// debugger;
		this.comment = this.props.comment;
		this.parseDate = this.parseDate.bind(this);
	}


	parseDate(date) {
		let newDate = new Date(date);
		return dateFormat(newDate, "mmmm dS, yyyy");

	}

	render() {
		let commentDate = this.parseDate(this.comment.created_at);
		return (
			<div className="comment-index-item">
				<div className="comment-item-creator">

					<div className="comment-item-creator-pic">
						<img src={this.comment.user_img}/>
					</div>

					<div className="comment-item-creator-text">
						 {this.comment.username} said
					</div>

				</div>

				<div className="comment-body">
					<p> {this.comment.body} </p>
				</div>

				<div className="comment-data">
					<p> on {commentDate} </p>
				</div>

			</div>
		);
	}
}


export default CommentIndexItem;

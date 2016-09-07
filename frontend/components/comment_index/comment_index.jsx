import React from 'react';
import CommentIndexItem from '../comment_index_item/comment_index_item';

class CommentIndex extends React.Component {
	constructor(props) {
		super(props);


	}

	render() {
		return (
			<div className="comment-index-wrapper">
				<ul className="comment-index-container">

					{this.props.comments.map((comment, idx) => (
						<CommentIndexItem key={idx} comment={comment}/>
					))}

				</ul>

			</div>
		);
	}
}

export default CommentIndex;

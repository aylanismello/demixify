import React from 'react';
import CommentIndexItem from '../comment_index_item/comment_index_item';



const CommentIndex = ({comments}) => (
	<div className="comment-index-wrapper">
		<ul className="comment-index-container">

			{comments.map((comment, idx) => (
				<CommentIndexItem key={idx} comment={comment}/>
			))}

		</ul>

	</div>
);



export default CommentIndex;

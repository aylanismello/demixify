import React from 'react';

const Like = ({liked, createLike, deleteLike, currentMixId}) => {

	let likedText = liked ? "UNLIKE" : "LIKE";
	let likeFunction = liked ? deleteLike : createLike;

	return(

	<button value="LIKE" onClick={likeFunction.bind(null, currentMixId)}
		className="like-button">
		{likedText}
	</button>
	);

};

export default Like;

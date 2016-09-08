import React from 'react';

const Like = ({liked, createLike, deleteLike, currentMixId}) => {


	// debugger;
	let likedText = liked ? "UNLIKE" : "LIKE";

	let likeFunction;


	if(liked) {
		likeFunction = deleteLike;
	} else {
		likeFunction = createLike;
	}


	return(

	<button value="LIKE" onClick={likeFunction.bind(null, currentMixId)}
		className="like-button">
		{likedText}
	</button>
	);

};

export default Like;

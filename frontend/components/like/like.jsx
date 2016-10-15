import React from 'react';

const LIKE_URL = 'http://res.cloudinary.com/dfkrjl3pb/image/upload/v1473401279/like_qsf88g.png';

const Like = ({liked, createLike, deleteLike, currentMixId, currentUserId}) => {


	// debugger;


	let likedText = liked ? "UNLIKE" : "LIKE";

	let likeDisplay = liked ? {background: `red`} : {background: `none`};

	let likeFunction;


	if(liked) {
		likeFunction = deleteLike;
	} else {
		likeFunction = createLike;
	}

	if (currentUserId) {
		return(

			<div className="like-button">
				<img src={LIKE_URL} style={likeDisplay}
					onClick={likeFunction.bind(null, currentMixId)} />
			</div>




		);
	} else {
		return (
			<div>
			</div>
		);
	}

};

export default Like;

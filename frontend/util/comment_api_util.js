const suc = (comment) => {

	console.log(`SUCCESS: comment is this obj: ${comment}`);
	window.receivedMix = comment;
};

const err = (errors) => {
	console.log(`ERROR: ${errors.responseJSON}`);
};



export const submitComment = (comment, success=suc, error=err) => {
	
	$.ajax({
		url: 'api/comments',
		method: 'POST',
		data: {comment: comment},
		success,
		error
	});

};

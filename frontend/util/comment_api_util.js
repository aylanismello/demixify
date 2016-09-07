const suc = (comment) => {

	console.log(`SUCCESS: comment is this obj: ${comment}`);
	window.comment = comment;
};

const err = (errors) => {
	console.log(`ERROR: ${errors.responseJSON}`);
};



export const submitComment = (comment, mixId, success=suc, error=err) => {


	$.ajax({
		url: 'api/comments',
		method: 'POST',
		data: {body: comment, mix_id: mixId},
		success,
		error
	});

};

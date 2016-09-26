const suc = (comment) => {

	// console.log(`SUCCESS: comment(s) is/are this obj: ${comment}`);
	window.comment = comment;
};

const err = (errors) => {
	// console.log(`ERROR: ${errors.responseJSON}`);
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

export const getComments = (mixId, success=suc, error=err) => {

	$.ajax({
		url: 'api/comments',
		method: 'GET',
		data: {mix_id: mixId},
		success,
		error
	});

};

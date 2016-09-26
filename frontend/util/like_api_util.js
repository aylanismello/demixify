const suc = (like) => {

	// console.log(`SUCCESS: like is this obj: ${like}`);
};

const err = (errors) => {
	// console.log(`ERROR: ${errors.responseJSON}`);
};

export const createLike = (mixId, success=suc, error=err) => {
	let params = {mixId, success, error};

	$.ajax({
		url: 'api/likes',
		method: 'POST',
		data: {like: {mix_id: mixId}},
		success,
		error

	});

};

export const deleteLike = (mixId, success=suc, error=err) => {
	$.ajax({
		url: `api/likes/${mixId}`,
		method: 'DELETE',
		data: {like: {mix_id: mixId}},
		success,
		error
	});
};

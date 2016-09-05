const suc = (user) => {

	console.log(`SUCCESS: user is this obj: ${user}`);
};

const err = (errors) => {
	// debugger;
	console.log(`ERROR: ${errors.responseJSON}`);
};




export const signup = (data, success = suc, error = err) => {

	$.ajax({
		url: 'api/users',
		method: 'POST',
		data,
		success,
		error
	});

};

export const login = (data, success = suc, error = err) => {
	$.ajax({
		url: 'api/session',
		method: 'POST',
		data,
		success,
		error
	});
};

export const logout = (success = suc, error = err) => {
	$.ajax({
		url: 'api/session',
		method: 'DELETE',
		success,
		error
	});
};

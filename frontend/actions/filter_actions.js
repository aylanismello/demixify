export const FilterConstants = {
	SET_FILTER: 'SET_FILTER'
};


export const setFilter = (filterType, val) => ({
	type: FilterConstants.SET_FILTER,
	filterType,
	val
});

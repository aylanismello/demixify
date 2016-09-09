import {FilterConstants} from '../actions/filter_actions';

let defaultFilter = Object.freeze({
	type: "",
	val: ""
});

const FilterReducer = (state=defaultFilter, action) => {


	switch (action.type) {
		case FilterConstants.SET_FILTER:
			return {type: action.filterType, val: action.val};
		default:
			return state;
	}

};

export default FilterReducer;

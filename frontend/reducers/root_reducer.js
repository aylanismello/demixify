import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MixReducer from './mix_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	mix: MixReducer,
	filter: FilterReducer
});

export default RootReducer;

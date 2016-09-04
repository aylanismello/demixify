import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MixReducer from './mix_reducer';

const RootReducer = combineReducers({
	session: SessionReducer,
	mix: MixReducer
});

export default RootReducer;

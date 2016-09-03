import SessionMiddleware from './session_middleware';
import MixMiddleware from './mix_middleware';
import createLogger  from 'redux-logger';
import { applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();


const RootMiddleware = applyMiddleware(SessionMiddleware,
		MixMiddleware, loggerMiddleware);

export default RootMiddleware;

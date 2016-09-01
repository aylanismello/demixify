import SessionMiddleware from './session_middleware';
import createLogger  from 'redux-logger';
import { applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();


const RootMiddleware = applyMiddleware(SessionMiddleware, loggerMiddleware);

export default RootMiddleware;

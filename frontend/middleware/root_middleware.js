import SessionMiddleware from './session_middleware';
import MixMiddleware from './mix_middleware';
import CommentMiddleware from './comment_middleware';
import createLogger  from 'redux-logger';
import { applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();


const RootMiddleware = applyMiddleware(SessionMiddleware,
		MixMiddleware, CommentMiddleware, loggerMiddleware);

export default RootMiddleware;

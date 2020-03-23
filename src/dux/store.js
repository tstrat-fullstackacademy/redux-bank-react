import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(loggingMiddleware));

export default store;

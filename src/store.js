/* globals window */
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import apolloClient from './apolloClient';
import loginReducer from './reducers/login';
import registerReducer from './reducers/register';
import userReducer from './reducers/user';

const reducers = combineReducers({
  apollo: apolloClient.reducer(),
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
});

export default createStore(reducers, {},
  compose(
    applyMiddleware(apolloClient.middleware(), createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

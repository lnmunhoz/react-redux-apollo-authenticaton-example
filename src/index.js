/* globals localStorage */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import createLogger from 'redux-logger';

import env from '../config/development.json';

import App from './App';
import './index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import loginReducer from './reducers/login';
import registerReducer from './reducers/register';
import userReducer from './reducers/user';

const networkInterface = createNetworkInterface({
  uri: env.graphqlServerUri,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

   // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  },
}]);

const client = new ApolloClient({ networkInterface });

const reducers = combineReducers({
  apollo: client.reducer(),
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
});

const store = createStore(reducers, {},
  compose(
    applyMiddleware(client.middleware(), createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

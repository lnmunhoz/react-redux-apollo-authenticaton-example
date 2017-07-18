/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';
import store from './store';
import Router from './router';

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root'),
);

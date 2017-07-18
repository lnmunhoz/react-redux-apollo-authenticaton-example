/* globals localStorage */
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import config from '../config.json';

const networkInterface = createNetworkInterface({
  uri: config.graphQLServiceUri,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

   // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`;
    }
    next();
  },
}]);

export default new ApolloClient({ networkInterface });

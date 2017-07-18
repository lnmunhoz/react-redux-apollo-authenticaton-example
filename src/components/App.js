import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import config from '../../config.json';
import './App.css';

// Check if graphQLServiceUri was set.
const isConfigSetup = new RegExp('api.scaphold.io').test(config.graphQLServiceUri);

const App = ({ token, logout, children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React + Redux + Apollo</h2>
      <h3>Authentication Example</h3>
    </div>

    { !isConfigSetup && (
      <div className="setup-alert">
        Please, setup your GraphQL Endpoint on <code>config.json</code> file
      </div>
    )}

    <main>
      {token ? (
        <div id="logout">
          <h2>You are authenticated!</h2>
          <div>
            <button
              className="btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>

        </div>
      ) : (
        <div id="auth">
          {children}
        </div>
      )}
    </main>
  </div>
);

App.propTypes = {
  token: PropTypes.string,
  logout: PropTypes.func,
  children: PropTypes.node,
};

App.defaultProps = {
  token: null,
  children: null,
  logout: () => {},
};

export default App;

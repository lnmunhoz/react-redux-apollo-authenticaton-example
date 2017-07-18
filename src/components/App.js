import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './App.css';

const App = ({ token, logout, children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React + Redux + Apollo</h2>
      <h3>Authentication Example</h3>
    </div>

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

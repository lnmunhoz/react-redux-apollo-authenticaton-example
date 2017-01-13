import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions/user';
import logo from './logo.svg';
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

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

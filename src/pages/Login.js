import React from 'react';
import { Link } from 'react-router';
import LoginForm from '../containers/LoginForm';

export default () => (
  <div>
    <h2>Login</h2>
    <div>
      <LoginForm submitButtonLabel={'Login'} />
    </div>
    <Link to="/register">Don't have an account? Register here! </Link>
  </div>
);

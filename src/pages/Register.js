import React from 'react';
import { Link } from 'react-router';
import RegisterForm from '../containers/RegisterForm';

export default () => (
  <div>
    <h2>Create your account</h2>
    <div>
      <RegisterForm submitButtonLabel={'Create account'} />
    </div>
    <Link to="/login">Have an account? Login here! </Link>
  </div>
);

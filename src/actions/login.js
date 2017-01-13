export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const loginUserRequest = ({ username }) => ({
  type: LOGIN_USER_REQUEST,
  username,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
  message: 'User logged in successfully!',
});

export const loginUserError = ({ error }) => ({
  type: LOGIN_USER_ERROR,
  message: error.message,
});

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const createUserRequest = ({ username }) => ({
  type: CREATE_USER_REQUEST,
  username,
});

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
  message: 'User created successfully!',
});

export const createUserError = ({ error }) => ({
  type: CREATE_USER_ERROR,
  message: error.message,
});

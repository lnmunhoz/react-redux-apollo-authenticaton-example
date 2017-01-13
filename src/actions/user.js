/* globals localStorage */

export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const setUserToken = ({ token }) => {
  localStorage.setItem('token', token);

  return {
    type: SET_USER_TOKEN,
    token,
  };
};
export const logoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: LOGOUT_USER,
  };
};

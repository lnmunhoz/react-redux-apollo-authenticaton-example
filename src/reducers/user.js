/* globals localStorage */

import {
  SET_USER_TOKEN,
  LOGOUT_USER,
} from '../actions/user';

const initialState = {
  token: localStorage.getItem('token'),
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        token: payload.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

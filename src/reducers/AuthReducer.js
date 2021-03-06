//
import {

  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER


 } from '../actions/types';

//
console.log(EMAIL_CHANGED);
console.log(PASSWORD_CHANGED);

//
const INITIAL_STATE = {

  email: '',
  password: '',
  user: null,
  error: '',
  loading: false

};

//
export default (state = INITIAL_STATE, action) => {

  console.log(action);

  //
  switch (action.type) {

    case EMAIL_CHANGED:
      console.log('email action!');
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      console.log('password action!');
      return { ...state, password: action.payload };

    case LOGIN_USER:
      console.log('login user!');
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      console.log('login success action!');
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      console.log('login fail action!');
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };

    default:
       return state;

  }

};

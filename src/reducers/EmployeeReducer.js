//
import {

  EMPLOYEES_FETCH_SUCCESS,

} from '../actions/types';

//
console.log(EMPLOYEES_FETCH_SUCCESS);

//
const INITIAL_STATE = {};

//
export default (state = INITIAL_STATE, action) => {

  console.log(action);

  //
  switch (action.type) {

    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action);
      console.log('employee fetch success!');
      //return { ...state, [id]: action.payload };
      return action.payload;

    default:
      return state;

  }

};

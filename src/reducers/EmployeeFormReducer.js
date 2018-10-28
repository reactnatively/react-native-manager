//
import {

  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,

} from '../actions/types';

//
console.log(EMPLOYEE_UPDATE);
console.log(EMPLOYEE_CREATE);
console.log(EMPLOYEE_SAVE_SUCCESS);

//
const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

//
export default (state = INITIAL_STATE, action) => {

  console.log(action);

  //
  switch (action.type) {

    case EMPLOYEE_UPDATE:
      console.log('employee update!');
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_CREATE:
      console.log('employee create!');
      return INITIAL_STATE;

    case EMPLOYEE_SAVE_SUCCESS:
      console.log('employee saved!');
      return INITIAL_STATE;

    default:
       return state;

  }

};

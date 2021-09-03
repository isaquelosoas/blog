import { NAV_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
    value: ''
};
export const navPosition = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case NAV_UPDATE_VALUE:
      console.log(action.value)
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
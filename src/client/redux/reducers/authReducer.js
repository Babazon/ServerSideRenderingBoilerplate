import { FETCH_AUTH } from '../actions/types';

const INITIAL_STATE = null;

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return action.payload || false;
    default:
      return state;
  }
};

import { FETCH_USERS } from '../actions/types';

const INITIAL_STATE = [];

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload];
    default:
      return state;
  }
};

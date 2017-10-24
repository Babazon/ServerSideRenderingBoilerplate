import { FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = [];

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload];
    default:
      return state;
  }
};

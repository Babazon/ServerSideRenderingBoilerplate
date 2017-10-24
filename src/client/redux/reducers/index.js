import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import { postsReducer } from './postsReducer';

const REDUCERS_OBJECT = {
  users: usersReducer,
  auth: authReducer,
  posts: postsReducer,
};

export default combineReducers(REDUCERS_OBJECT);

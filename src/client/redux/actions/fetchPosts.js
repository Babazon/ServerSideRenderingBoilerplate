import { FETCH_POSTS } from './types';

export const fetchPosts = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/posts');
  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

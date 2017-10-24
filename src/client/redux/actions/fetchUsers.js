import { FETCH_USERS } from './types';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: data,
  });
};

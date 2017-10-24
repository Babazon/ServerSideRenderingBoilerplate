import { FETCH_AUTH } from './types';

export const fetchAuth = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/current_user');
  dispatch({
    type: FETCH_AUTH,
    payload: data,
  });
};

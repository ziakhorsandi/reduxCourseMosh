import axios from 'axios';

import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  const { url, method, data, onStart, onSucess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:9001/api',
      url,
      method,
      data,
    });
    //General succec action
    dispatch(actions.apiCallSuccess(response.data));
    //Specific success action
    if (onSucess) dispatch({ type: onSucess, payload: response.data });
  } catch (error) {
    //General error action
    dispatch(actions.apiCallFailed(error.message));
    //For specific senarios error action
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
export default api;

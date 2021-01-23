//if no thunk we must use such  amiddleware

const func = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') action(dispatch, getState);
  else next(action);
};

export default func;

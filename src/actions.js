import * as actios from './actionTypes';

export const bugAdded = (description) => ({
  type: actios.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  type: actios.BUG_REMOVED,
  payload: { id },
});

export const bugResolved = (id) => ({
  type: actios.BUG_RESOLVED,
  payload: { id },
});

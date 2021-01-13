import reducer from './reducer';

function creatStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    //listener is a function thats must run every time state change
    listeners.push(listener);
  }

  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default creatStore(reducer);

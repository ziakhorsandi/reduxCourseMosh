import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import configureStore from './store/configureStore';
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
  loadBugs,
  addBug,
} from './store/bug';
import { apiCallBegan } from './store/api';
// import { userAdded } from './store/users';
// import { projectAdded } from './store/projects';

// import * as actions from './store/api';

function App() {
  useEffect(() => {
    const store = configureStore();

    // console.log(getBugsByUser(1)(store.getState()));

    // store.dispatch((dispatch, getState) => {
    //   dispatch({ type: 'bugsReceived', bugs: [1, 2, 4] });
    //   console.log(getState());
    // });

    // //--for toast middleware
    // store.dispatch({
    //   type: 'error',
    //   payload: { message: 'An Error Accurred' },
    // });

    // //------for cache
    // store.dispatch(loadBugs());
    // setTimeout(() => {
    //   store.dispatch(loadBugs());
    // }, 2000);

    //add to server
    store.dispatch(addBug({ description: 'bugA' }));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

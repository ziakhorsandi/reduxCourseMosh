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
} from './store/bug';
// import { userAdded } from './store/users';
// import { projectAdded } from './store/projects';

// import * as actions from './store/api';

function App() {
  useEffect(() => {
    const store = configureStore();
    // store.dispatch(bugAdded({ description: 'bug1' }));
    // store.dispatch(bugAdded({ description: 'bug2' }));
    // store.dispatch(bugAdded({ description: 'bug3' }));
    // store.dispatch(bugResolved({ id: 1 }));
    // store.dispatch(bugRemoved({ id: 1 }));

    // const x = getUnresolvedBugs(store.getState());
    // const y = getUnresolvedBugs(store.getState());
    // console.log(x === y);

    // const unresolvedBugs = getUnresolvedBugs(store.getState());
    // console.log(unresolvedBugs);

    // store.dispatch(projectAdded({ name: 'prj1' }));

    // store.dispatch(userAdded({ userName: 'name1' }));
    // store.dispatch(userAdded({ userName: 'name2' }));

    // store.dispatch(bugAssignedToUser({ userId: 1, bugId: 2 }));

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

    //------for cache
    store.dispatch(loadBugs());
    setTimeout(() => {
      store.dispatch(loadBugs());
    }, 2000);
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

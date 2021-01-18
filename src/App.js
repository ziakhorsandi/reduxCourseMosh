import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import configureStore from './store/configureStore';
// import store from './store/CustomeStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bug';

function App() {
  // store.subscribe(() => {
  //   console.log('State changed!');
  // });
  // store.dispatch(bugAdded('bug1'));
  // console.log('store.getState()', store.getState());
  // console.log('store', store);

  // store.subscribe(() => {
  //   console.log('Store Changed!', store.getState());
  // });

  useEffect(() => {
    const store = configureStore();
    store.dispatch(bugAdded({ description: 'bug1' }));
    store.dispatch(bugAdded({ description: 'bug2' }));
    store.dispatch(bugAdded({ description: 'bug3' }));
    store.dispatch(bugResolved({ id: 1 }));
    store.dispatch(bugRemoved({ id: 1 }));
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

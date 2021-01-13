import logo from './logo.svg';
import './App.css';

// import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

import store from './CustomeStore';

function App() {
  store.subscribe(() => {
    console.log('State changed!');
  });
  store.dispatch(bugAdded('bug1'));
  console.log('store.getState()', store.getState());
  console.log('store', store);

  // store.subscribe(() => {
  //   console.log('Store Changed!', store.getState());
  // });

  // store.dispatch(bugAdded('bug1'));
  // store.dispatch(bugResolved(1));
  // store.dispatch(bugRemoved(1));

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

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger';
import func from './middleware/func';

export default function setStore() {
  return configureStore({
    reducer,
    middleware: [logger({ describtion: 'console' }), func],
  });
}

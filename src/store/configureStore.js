import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
// import logger from './middleware/logger';
// import func from './middleware/func';
// import toast from './middleware/toast';
import api from './middleware/api';

export default function setStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger({ describtion: 'console' }),
      // func,
      // toast,
      api,
    ],
  });
}

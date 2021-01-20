import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export default function setStore() {
  return configureStore({ reducer });
}

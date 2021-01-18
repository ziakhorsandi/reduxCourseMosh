import { configureStore } from '@reduxjs/toolkit';
import reducer from './bug';

export default function setStore() {
  return configureStore({ reducer });
}

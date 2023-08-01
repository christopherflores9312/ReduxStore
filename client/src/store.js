import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './utils/reducers'; // Use named import syntax here

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

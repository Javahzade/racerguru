import {combineReducers} from '@reduxjs/toolkit';
import {api} from 'services/rtkQuery';

export const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

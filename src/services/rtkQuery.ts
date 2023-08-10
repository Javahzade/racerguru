import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './apiBaseQuery';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

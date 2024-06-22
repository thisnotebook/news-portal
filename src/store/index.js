import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import newsReducer from './slices/newsSlice';

const makeStore = () => configureStore({
  reducer: {
    news: newsReducer,
  },
});

export const wrapper = createWrapper(makeStore);

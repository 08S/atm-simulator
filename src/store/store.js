
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/account/accountSlice';

const preloadedState = {
  account: {
    balance: parseInt(localStorage.getItem('balance')) || 0,
    transactionHistory: JSON.parse(localStorage.getItem('transactionHistory')) || [],
  },
};

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
  preloadedState,
});

export default store;


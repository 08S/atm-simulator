
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: parseInt(localStorage.getItem('balance')) || 0,
    transactionHistory: JSON.parse(localStorage.getItem('transactionHistory')) || [],
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
    deposit: (state, action) => {
        state.balance += action.payload;
        state.transactionHistory.push(`Deposited Rs. ${action.payload}`);
        localStorage.setItem('balance', state.balance);
        localStorage.setItem('transactionHistory', JSON.stringify(state.transactionHistory));
    },
    withdraw: (state, action) => {
        state.balance -= action.payload;
        state.transactionHistory.push(`Withdrawn Rs. ${action.payload}`);
        localStorage.setItem('balance', state.balance);
        localStorage.setItem('transactionHistory', JSON.stringify(state.transactionHistory));
    },
    },
});

export const { deposit, withdraw } = accountSlice.actions;

export const selectBalance = (state) => state.account.balance;
export const selectTransactionHistory = (state) => state.account.transactionHistory;

export default accountSlice.reducer;

import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from './accountSlice';

const AccountBalance = () => {
  const balance = useSelector(selectBalance);

  return (
    <div>
      <h2>Account Balance</h2>
      <p>Current Balance: Rs. {balance}</p>
    </div>
  );
};

export default AccountBalance;

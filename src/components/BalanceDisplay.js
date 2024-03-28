import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../features/account/accountSlice';

// import { useSelector} from 'react-redux';
// import { selectBalance } from "../features/account/accountSlice";

const BalanceDisplay = () => {
  const balance = useSelector(selectBalance);

  return (
    <div className=' container mx-auto px-4 py-8'>
      <h2 className=' text-2xl font-bold text-center mb-4'>Account Balance</h2>
      <p className='text-xl text-center'>Current Balance: Rs. {balance}</p>
    </div>
  );
};

export default BalanceDisplay;


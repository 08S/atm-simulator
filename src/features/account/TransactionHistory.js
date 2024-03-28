import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactionHistory } from './accountSlice';

const TransactionHistory = () => {
  const transactionHistory = useSelector(selectTransactionHistory);

  return (
    <div className=' bg-white shadow-md p-8 rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Transaction History</h2>
      <ul className=' list-disc list-inside'>
        {transactionHistory.map((transaction, index) => (
          <li key={index} className='text-gray-700'>{transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;

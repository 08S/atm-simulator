
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdraw, selectBalance } from '../features/account/accountSlice';

const WithdrawForm = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();

  const handleWithdrawal = (e) => {
    e.preventDefault();

    const num2000Notes = Math.floor(balance / 2000);
    const num1000Notes = Math.floor((balance % 2000) / 1000);
    const num500Notes = Math.floor(((balance % 2000) % 1000) / 500);
    const num100Notes = Math.floor((((balance % 2000) % 1000) % 500) / 100);

    const withdrawalAmountInt = parseInt(withdrawalAmount);
    const withdrawalAmount2000 = Math.min(num2000Notes, Math.floor(withdrawalAmountInt / 2000));
    const withdrawalAmount1000 = Math.min(num1000Notes, Math.floor((withdrawalAmountInt % 2000) / 1000));
    const withdrawalAmount500 = Math.min(num500Notes, Math.floor(((withdrawalAmountInt % 2000) % 1000) / 500));
    const withdrawalAmount100 = Math.min(num100Notes, Math.floor((((withdrawalAmountInt % 2000) % 1000) % 500) / 100));

    const totalAmountDispensed = (withdrawalAmount2000 * 2000) + (withdrawalAmount1000 * 1000) + (withdrawalAmount500 * 500) + (withdrawalAmount100 * 100);

    if (totalAmountDispensed === withdrawalAmountInt) {
      dispatch(withdraw(withdrawalAmountInt));
      setWithdrawalAmount('');
    } else {
      alert('Insufficient funds or unavailable notes to dispense the requested amount.');
    }
  };

  return (
    <div className=' bg-white shadow-md p-8 rounded-lg'>
      <h2 className=' text-2xl font-bold mb-4'>Withdraw Money</h2>
      <form onSubmit={handleWithdrawal} className=' flex flex-col space-y-4'>
        <label className='flex flex-col'>
          Amount:
          <input type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(e.target.value)} className='border-2 border-gray-300 rounded-lg p-2'/>
        </label>
        <button type="submit" className='bg-red-500 text-white py-2 px-4 rounded-lg'>Withdraw</button>
      </form>
    </div>
  );
};

export default WithdrawForm;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit } from '../features/account/accountSlice';

const DepositForm = () => {
  const [denomination, setDenomination] = useState(100);
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();

    if(notes <= 0){
        alert('Please enter a valid amount of notes to deposit');
        return;
    }
    
    const amount = denomination * notes;
    dispatch(deposit(Number(amount)));
    setNotes('');
    setDenomination(100);
  };

  return (
    <div className='bg-white shadow-md p-8 rounded-lg'>
     <h2 className='text-2xl font-bold mb-4'>Deposit Money</h2>
       <form onSubmit={handleDeposit} className='flex flex-col space-y-4'>
      <label className='flex flex-col'>
        Denomination:
        <select value={denomination} onChange={(e) => setDenomination(parseInt(e.target.value))}>
          <option value={100}>Rs. 100</option>
          <option value={500}>Rs. 500</option>
          <option value={1000}>Rs. 1000</option>
          <option value={2000}>Rs. 2000</option>
        </select>
      </label>
      <label className='flex flex-col'>
        Number of notes:
        <input type="number" value={notes} onChange={(e) => setNotes(parseInt(e.target.value))} className=' border-2 border-gray-300 rounded-lg p-2'/>
      </label>
      <button type="submit" className='bg bg-blue-500 text-white py-2 px-4 rounded-lg'>Deposit</button>
    </form>
    </div>
  );
};

export default DepositForm;

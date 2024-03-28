# atm-simulator explanation

**functionality**
Allow users to deposit and withdraw money in denomination of Rs. 100, 500, 1000, 2000.
display the curent account balance
validates the dispense money based on available notes for denomination.
persists account balance and transaction history across page refreshes using local storage

**components**
DepositForm
withdrawForm
AccountBalance
TransactionHistoy

**Redux setup**
uses redux toolkit for state management
define slice for managing account balance and transaction history.
handles local storage interactions to persist and load account state

**UI**
for clean and responsice design i've use tailwindcss

**challenges**
I have faced challenges in some of the place but the major challenge i have faced while developing withdrawForm because the withdrawal is based on what notes available in the ATM for that 
first i have to calculate the available notes of different denominations
and then calculate the maximum number of notes for each denomination that can be dispensed for the requested withdrawal amount
and after that calculate the total money that can be dispensed based on the calculated number of notes.

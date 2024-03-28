ATM Machine explanation

functionality Allows users to deposit and withdraw money in denominations of Rs. 100, 500, 1000, 2000. display the current account balance validates the dispensed money based on available notes for the denomination. persists account balance and transaction history across page refreshes using local storage

components DepositForm withdrawForm AccountBalance TransactionHistoy

Redux setup uses redux toolkit for state management define slice for managing account balance and transaction history. handles local storage interactions to persist and load account state

UI for clean and responsive design I've used tailwindcss

challenges I have faced challenges in some places but the major challenge I have faced while developing withdrawForm is because the withdrawal is based on what notes are available in the ATM first I have to calculate the available notes of different denominations and then calculate the maximum number of notes for each denomination that can be dispensed for the requested withdrawal amount and after that calculate the total money that can be dispensed based on the calculated number of notes.

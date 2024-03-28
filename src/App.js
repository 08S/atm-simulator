import BalanceDisplay from "./components/BalanceDisplay";
import DepositForm from "./components/DepositForm";
import WithdrawForm from "./components/WithdrawForm";
import { Provider } from "react-redux";
import store from "./store/store";
import TransactionHistory from "./features/account/TransactionHistory";

const App = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" bg-slate-400 shadow-md p-4 rounded-lg max-w-96">
        <h1 className=" text-3xl font-bold mb-4 text-center">ATM Machine</h1>
        <Provider store={store}>
          {" "}
          <BalanceDisplay />
          <DepositForm />
          <WithdrawForm />
          <TransactionHistory />
        </Provider>
      </div>
    </div>
  );
};

export default App;

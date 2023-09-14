import "./App.css";
import Head from "./components/Head";
import Balance from "./components/Balance";
import IncomeExpanse from "./components/IncomeExpanse";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Head />
      <div className="container">
        <Balance />
        <IncomeExpanse />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

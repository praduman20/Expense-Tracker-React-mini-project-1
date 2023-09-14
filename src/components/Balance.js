import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((e) => e.amount);
  const totalBalance = amount
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);
  return (
    <>
      <div>
        <h4>Your Balance</h4>
        <h1>${totalBalance}</h1>
      </div>
    </>
  );
};

export default Balance;

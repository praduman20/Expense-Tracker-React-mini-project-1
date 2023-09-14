import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpanse = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((e) => e.amount);
  const income = amount
    .filter((e) => e > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expense = (
    amount.filter((e) => e < 0).reduce((acc, curr) => (acc += curr), 0) * -1
  ).toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpanse;

import React, { useContext } from "react";
import { GlobalContext } from "../CONFIG/Context";
import "../App.css";

function IncomeExpense() {
  const { state } = useContext(GlobalContext);

  let amountArray = state?.transactions.map(
    (transaction) => transaction.amount
  );

  let totalIncome = 0;
  let totalExpense = 0;
  for (let i = 0; i < amountArray.length; i++) {
    if (amountArray[i] > 0) {
      totalIncome += amountArray[i];
    } else {
      totalExpense += amountArray[i];
    }
  }

  return (
    <div className="incomeExpenseDiv">
      <div className="incomeDiv">
        <p className="IDp1">INCOME</p>
        <p className="IDp2">{totalIncome}$</p>
      </div>
      <div className="expenseDiv">
        <p className="EDp1">EXPENSE</p>
        <p className="EDp2">{totalExpense}$</p>
      </div>
    </div>
  );
}

export default IncomeExpense;

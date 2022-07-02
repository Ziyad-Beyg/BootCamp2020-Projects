import React, { useContext } from "react";
import { GlobalContext } from "../CONFIG/Context";
import "../App.css";

function TotalExpense() {
  let { state } = useContext(GlobalContext);

  let amountArray = state?.transactions.map(
    (transaction) => transaction.amount
  );

  let totalExpense = 0;
  for (let i = 0; i < amountArray.length; i++) {
    totalExpense += amountArray[i];
  }

  return (
    <div>
      <h2 className="heading1">EXPENSE TRACKER</h2>
      <div className="balanceDiv">
        <p className="balancep1">YOUR BALANCE</p>
        <p className="balancep2">${totalExpense}</p>
      </div>
    </div>
  );
}

export default TotalExpense;

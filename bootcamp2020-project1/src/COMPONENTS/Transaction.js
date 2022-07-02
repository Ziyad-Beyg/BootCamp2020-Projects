import React, { useContext } from "react";
import { GlobalContext } from "../CONFIG/Context";
import "../App.css";

function Transaction({ transaction }) {
  const { dispatch } = useContext(GlobalContext);
  let sign = transaction.amount < 0 ? "-" : "+";

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <div className="transactionList">
      <div
        className={`transactionDiv ${
          sign === "-" ? "redTransaction" : "greenTransaction"
        }`}
      >
        <p className="textPara">{transaction?.text}</p>
        <p className="amountPara">
          {sign}
          {Math.abs(transaction?.amount)}$
        </p>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </div>
  );
}

export default Transaction;

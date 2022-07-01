import React, {useContext} from "react";
import { GlobalContext } from "../CONFIG/Context";
import Transaction from "./Transaction";
import "../App.css";

function TransactionHistory({ transaction }) {

  let { state } = useContext(GlobalContext)

  return (
    <div className="historyDiv">
            <h2>HISTORY</h2>
            {state?.transactions.map((transaction, index) => (
              <Transaction key={index} transaction={transaction} />
            ))}
          </div>
  );
}

export default TransactionHistory;

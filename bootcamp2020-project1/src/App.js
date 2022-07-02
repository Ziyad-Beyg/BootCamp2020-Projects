import React from "react";
import TransactionHistory from "./COMPONENTS/TransactionHistory";
import AddNewTransaction from "./COMPONENTS/AddNewTransaction";
import IncomeExpense from "./COMPONENTS/IncomeExpense";
import TotalExpense from "./COMPONENTS/TotalExpense";
import { GlobalProvider } from "./CONFIG/Context";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="main">
          <TotalExpense />

          <IncomeExpense />

          <TransactionHistory />

          <AddNewTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

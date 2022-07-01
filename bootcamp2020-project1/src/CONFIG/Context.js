import React, { createContext, useReducer } from "react";
import {reducer, data} from "./Reducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  // ACTIONS

  // function deleteTransaction(id){
  //   dispatch({
  //     type: "DELETE_TRANSACTION", 
  //     payload: id
  //   })
  // }

  return (
    <GlobalContext.Provider
      value={{
        state, dispatch
        // transactions: state.transaction,
        // deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

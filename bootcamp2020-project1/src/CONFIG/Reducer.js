// export default (state, action) => {
//   switch (action.type) {
//     case 'DELETE_TRANSACTION':{
//       return state.filter((transactions) => transactions.id !==action.payload)
//     }
//       // {
//       //   ...state,
//       //   transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
//       // }
//     default:
//       return state;
//   }
// };

const data = {
  transactions: [
    { id: "1", text: "Cash", amount: 4000 },
    { id: "2", text: "Flower", amount: -400 },
    { id: "3", text: "Car Sold", amount: 3000 },
    { id: '4', text: "Camera", amount: -5000 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION": {
      // return console.log(action.payload)
      return{
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      }
    }
    case "NEW_TRANSACTION": {
      let transactionClone = state.transactions.slice(0);
      transactionClone.push(action.payload);
      return{
        ...state,
        transactions: transactionClone
    } 
    }
    default :
      return state;
  }
}

export {reducer, data}
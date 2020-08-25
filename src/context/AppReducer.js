// The 'state' parameter for the useReducer function  
// is the current state. The action is a function that gets
// called to update the state.
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        // Preserve the rest of the GlobalContext object unchanged
        ...state,
        // Only modify the transactions array to delete one entry
        transactions: state.transactions.filter(item => item.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        // Modify the transactions array push a new entry
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state
  }
}
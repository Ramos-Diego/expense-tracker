import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// This section would come from a database
// If an API is setup for the project
const initialState = {
  transactions: []
}

// The global context becomes a single source of truth
// Any child element can grab states from it
export const GlobalContext = createContext(initialState)
  
// The global provider gives children elements access to 
// the global context
export const GlobalProvider = ({ children }) => {
  // A reducer function enables the consumption and modification of states
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // The dispatch functions are passed to the global provider
  // This way they can be called from any element
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  // The 'type' is a convention to identify the function
  // in a switch statement. The payload is optional for dispatch
  function addTransaction(item) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: item
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
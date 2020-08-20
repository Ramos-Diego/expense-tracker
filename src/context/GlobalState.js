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
  
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

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
import React from 'react'
import './css/builds/light.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    // GlobalProvider becomes <div id="root">
    <GlobalProvider>
      <main>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </main>
    </GlobalProvider>
  )
}

export default App

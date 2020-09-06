import React from 'react'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import { Container } from '@material-ui/core';

const containerStyles = {
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'column',
}

export default function App() {
  return (
    <GlobalProvider>
      <Container
        component="main"
        maxWidth="xs"
        style={containerStyles}
      >
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  )
}

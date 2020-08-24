import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from '@material-ui/core';

export default function Balance() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      <Typography variant="h4" align='center' gutterBottom>
        Expense Tracker
      </Typography>
      <Typography gutterBottom>
        Your balance:
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${total}
      </Typography>
    </>
  )
}

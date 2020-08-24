import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from '@material-ui/core';

export default function Balance() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Your balance:
      </Typography>
      <Typography variant="h5" gutterBottom>
        ${total}
      </Typography>
    </>
  )
}

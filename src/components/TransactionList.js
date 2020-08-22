import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <dl className="list">
        {transactions.map(item => <Transaction key={item.id} item={item}/>)}
      </dl>
    </>
  )
}

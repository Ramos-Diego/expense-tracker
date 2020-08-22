import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({ item }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = item.amount < 0 ? '-' : '+'

  return (
    <dt className={sign === '-' ? 'minus' : 'plus'}>
      <button onClick={() => deleteTransaction(item.id)} className="delete-btn"><span>&#10006;</span></button>
      {item.text}
      <span className="amount">{sign}${Math.abs(item.amount)}</span>
    </dt>
  )
}

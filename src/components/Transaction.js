import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({ item }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = item.amount < 0 ? '-' : '+'

  return (
    <li className={sign === '-' ? 'minus' : 'plus' }>
      {item.text}
      <span>{sign}${Math.abs(item.amount)}</span>
      <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button>
    </li>
  )
}

import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
  const { register, handleSubmit, errors } = useForm();
  const { addTransaction } = useContext(GlobalContext)

  function onSubmit(data) {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      amount: +data.amount
    }
    console.log(data)
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="text">Expense</label>
          <input
            name="text"
            placeholder="Enter the name of the expense..."
            ref={register({ required: true })} />
          {errors.text && <p className="input-error">The expense's name is required.</p>}
        </div>

        <div className="amount">
          <div>
            <label htmlFor="expense">Expense</label>
            <input
              type="checkbox"
              name="expense"
              className="expense"
              ref={register({ required: true })} />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              inputMode="decimal"
              placeholder="Enter the dollar amount..."
              ref={register({ required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} />
            {errors.amount && errors.amount.type === "pattern" && <p className="input-error">Only insert digits, 0 through 9.</p>}
            {errors.amount && errors.amount.type === "required" && <p className="input-error">The amount is required.</p>}
          </div>
        </div>


        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
const Expense = () => {
  const [filteredDate, setFilteredYear] = useState('2020')
  const expenses = [
    {id:1, title: "Toyota", amount: 5999, date: new Date(2021, 2, 27) },
    {id:2, title: "Audi", amount: 8450, date: new Date(2022, 12, 7) },
    {id:3, title: "BMW", amount: 7200, date: new Date(2018, 22, 17) }
  ]

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
    }
  return (
    <div className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected = {filteredDate}/>
    {expenses.map((el)=>{
      return (
        <ExpenseItem 
        title={el.title}
        amount = {el.amount}
        date = {el.date}
        />
      )
    })}
    </div>
  )
}

export default Expense;